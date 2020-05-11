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

export function getDeployDir(context: BuilderContext, options: AzureDeployBuilderSchema) {
  return join(normalize(context.workspaceRoot), options.deployDir);
}
