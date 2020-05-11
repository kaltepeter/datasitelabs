import { BuilderContext } from '@angular-devkit/architect';
import { lookup, charset } from 'mime-types';
import * as ProgressBar from 'progress';
import * as path from 'path';
import * as fs from 'fs';
import { ContainerClient, BlockBlobClient, BlobHTTPHeaders } from '@azure/storage-blob';
import { AbortController } from '@azure/abort-controller';

export async function uploadFile(blockBlobClient: BlockBlobClient,  filesPath: string,
  file: string, blobHTTPHeaders: BlobHTTPHeaders) {
  return await blockBlobClient.uploadStream(
    fs.createReadStream(path.join(filesPath, file)),
    4 * 1024 * 1024,
    20,
    {
      abortSignal: AbortController.timeout(30 * 60 * 1000),
      blobHTTPHeaders
    }
  );
}

export async function uploadFilesToAzure(
  containerClient: ContainerClient,
  context: BuilderContext,
  filesPath: string,
  files: string[]
): Promise<void> {
  context.logger.info('preparing static deploy');

  // const containerURL = ContainerURL.fromServiceURL(serviceURL, '$web');

  const bar = new ProgressBar(
    '[:bar] :file :current/:total files uploaded | :percent done | :elapseds | eta: :etas',
    {
      total: files.length
    }
  );

  bar.tick(0);

  const blobsUploaded = [];

  return Promise.all(
    files.map(async file => {
      const blobContentType = lookup(file) || '';
      const blobContentEncoding = charset(blobContentType) || '';
      // Create a blob
      const blobName = file;
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);
      const blobHTTPHeaders = {
        blobContentType,
        blobContentEncoding
      }

      try {
      await uploadFile(blockBlobClient, filesPath, file, blobHTTPHeaders);
      } catch(err) {
        const msg = `upload failed: ${err.message}`;
        bar.interrupt(msg);
      }
      const blobProps = await blockBlobClient.getProperties();

      blobsUploaded.push({
        size: blobProps.contentLength,
        etag: blobProps.etag,
        lastModified: blobProps.lastModified,
        name: blobName
      });

      bar.tick(1, {
        'file': file
      });
    })
  ).then(() => {
    bar.terminate();
    context.logger.info('deploying static site');
    // List the blob(s) in the container.
    console.table(blobsUploaded);
  });
}
