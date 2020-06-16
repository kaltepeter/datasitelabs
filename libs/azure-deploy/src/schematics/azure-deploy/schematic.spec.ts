import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { AzureDeploySchematicSchema } from './schema';

describe('azure-deploy schematic', () => {
  let appTree: Tree;
  const options: AzureDeploySchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@datasitelabs/azure-deploy',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner.runSchematicAsync('azureDeploy', options, appTree).toPromise()
    ).resolves.not.toThrowError();
  });
});
