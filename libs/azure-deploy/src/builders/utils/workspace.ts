import { BuilderContext } from '@angular-devkit/architect';
import { join, normalize } from '@angular-devkit/core';
import { JsonObject } from "@angular-devkit/core";
import { AzureDeployBuilderSchema } from '../azure-deploy/schema';

export async function getProjectRoot(context: BuilderContext): Promise<string> {
  const projectMetadata = await context.getProjectMetadata(
    context.target.project
  );
  return join(normalize(context.workspaceRoot), projectMetadata.root as string);
}

export async function getDeployDir(context: BuilderContext, options: AzureDeployBuilderSchema) {
  const projectMeta = await context.getProjectMetadata(context.target.project);
  const rootDir = projectMeta.root as string;
  return options.deployDir ? join(normalize(context.workspaceRoot), options.deployDir) : join(normalize(context.workspaceRoot), 'dist', normalize(rootDir));
}
