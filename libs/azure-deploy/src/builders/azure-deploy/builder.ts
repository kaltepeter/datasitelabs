import {
  BuilderContext,
  BuilderOutput,
  createBuilder
} from '@angular-devkit/architect';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AzureDeployBuilderSchema } from './schema';
import { BlobServiceClient } from '@azure/storage-blob';
import * as fs from 'fs';
import { AbortController } from '@azure/abort-controller';

// Load the .env file if it exists
import * as dotenv from 'dotenv';
const result = dotenv.config();

if (result.error) {
  throw result.error;
}

const localFilePath = 'dist/apps/business/main-es5.js';

export function runBuilder(
  options: AzureDeployBuilderSchema,
  context: BuilderContext
): Observable<BuilderOutput> {
  return Observable.create(async observer => {
    // Create Blob Service Client from Account connection string or SAS connection string
    // Account connection string example - `DefaultEndpointsProtocol=https;AccountName=myaccount;AccountKey=accountKey;EndpointSuffix=core.windows.net`
    // SAS connection string example - `BlobEndpoint=https://myaccount.blob.core.windows.net/;QueueEndpoint=https://myaccount.queue.core.windows.net/;FileEndpoint=https://myaccount.file.core.windows.net/;TableEndpoint=https://myaccount.table.core.windows.net/;SharedAccessSignature=sasString`
    const STORAGE_CONNECTION_STRING =
      process.env.STORAGE_CONNECTION_STRING || '';
    context.logger.info(`Building...`);
    // Note - Account connection string can only be used in node.
    const blobServiceClient = BlobServiceClient.fromConnectionString(
      STORAGE_CONNECTION_STRING
    );

    let i = 1;
    for await (const container of blobServiceClient.listContainers()) {
      context.logger.info(`Container ${i++}: ${container.name}`);
    }

    // Create a container
    const containerName = `$web`;
    const containerClient = blobServiceClient.getContainerClient(containerName);

    const containerExists = await containerClient.exists();

    if (!containerExists) {
      // Delete container
      // await containerClient.delete();
      const createContainerResponse = await containerClient.create({
        access: 'container'
      });

      context.logger.info(
        `Create container ${containerName} successfully ${createContainerResponse.requestId}`
      );
    }

    // Create a blob
    const blobName = 'main-es2015.js';
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    // Parallel uploading with BlockBlobClient.uploadFile() in Node.js runtime
    // BlockBlobClient.uploadFile() is only available in Node.js
    // try {
    //   await blockBlobClient.uploadFile(localFilePath, {
    //     blockSize: 4 * 1024 * 1024, // 4MB block size
    //     concurrency: 20, // 20 concurrency
    //     onProgress: ev => console.log(ev)
    //   });
    //   console.log('uploadFile succeeds');
    // } catch (err) {
    //   observer.error(
    //     `uploadFile failed, requestId - ${err.details.requestId}, statusCode - ${err.statusCode}, errorCode - ${err.details.errorCode}`
    //   );
    // }
    // Parallel uploading a Readable stream with BlockBlobClient.uploadStream() in Node.js runtime
    // BlockBlobClient.uploadStream() is only available in Node.js
    try {
      await blockBlobClient.uploadStream(
        fs.createReadStream(localFilePath),
        4 * 1024 * 1024,
        20,
        {
          abortSignal: AbortController.timeout(30 * 60 * 1000), // Abort uploading with timeout in 30mins
          onProgress: ev => console.log(ev)
        }
      );
      console.log('uploadStream succeeds');
    } catch (err) {
      observer.error(
        `uploadStream failed, requestId - ${err.details.requestId}, statusCode - ${err.statusCode}, errorCode - ${err.details.errorCode}`
      );
    }

    // List the blob(s) in the container.
    for await (const blob of containerClient.listBlobsFlat()) {
      console.log('\t', blob.name);
    }

    // context.logger.info('deleted container');
    observer.next({ success: true });
    observer.complete();
  }).pipe(
    tap(() => {
      context.logger.info('Builder ran for azure-deploy');
    })
  );
}

export default createBuilder(runBuilder);
