import {
  BuilderContext,
  BuilderOutput,
  createBuilder
} from '@angular-devkit/architect';
import { Observable, from } from 'rxjs';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob';

// Load the .env file if it exists
import * as dotenv from 'dotenv';
import * as glob from 'glob';
import { AzureDeployBuilderSchema } from './schema';
import { uploadFilesToAzure } from '../utils/upload-files-to-azure';
import { readJsonInTree, getWorkspacePath } from '@nrwl/workspace';
import { normalizeBuildOptions } from '@nrwl/node/src/utils/normalize';
import { createProjectGraph } from '@nrwl/workspace/src/core/project-graph';
import { calculateProjectDependencies } from '@nrwl/workspace/src/utils/buildable-libs-utils';
import { workspaces } from '@angular-devkit/core';
import { NodeJsSyncHost } from '@angular-devkit/core/node';
import { getDeployDir } from '../utils/workspace';
import { async } from 'rxjs/internal/scheduler/async';

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

const getFiles = (context: BuilderContext, filesPath: string) => {
  return glob.sync(`**`, {
    ignore: ['.git', '.azez.json'],
    cwd: filesPath,
    nodir: true
  });
};

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

    const localFilePath = getDeployDir(context, options);
    context.logger.info(`Uploading files in: ${localFilePath}`);

    let i = 1;
    for await (const container of blobServiceClient.listContainers()) {
      context.logger.info(`Container ${i++}: ${container.name}`);
    }

    const encodedContainerName = encodeURI(options.containerName);
    // Create a container
    const containerClient = blobServiceClient.getContainerClient(
      encodedContainerName
    );

    const containerExists = await containerClient.exists();

    if (!containerExists) {
      // Delete container
      const createContainerResponse = await containerClient.create({
        access: 'container'
      });

      context.logger.info(
        `Create container ${options.containerName} successfully ${createContainerResponse.requestId}`
      );
    }

    const files = await getFiles(context, localFilePath);
    console.log(context, localFilePath, files)
    if (files.length === 0) {
      throw new Error(
        'Target did not produce any files, or the path is incorrect.'
      );
    }

    try {
      await uploadFilesToAzure(containerClient, context, localFilePath, files);
    } catch (err) {
      observer.error(
        `uploadStream failed, requestId - ${err.details.requestId}, statusCode - ${err.statusCode}, errorCode - ${err.details.errorCode}`
      );
    }

    console.log(`Files in ${containerClient.containerName}`);

    observer.next({ success: true });
    observer.complete();
  }).pipe(
    tap(() => {
      context.logger.info('Builder ran for azure-deploy');
    }),
    map(() => ({ success: true }))
  );
}

export default createBuilder(runBuilder);
