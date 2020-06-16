import { Architect } from '@angular-devkit/architect';
import { TestingArchitectHost } from '@angular-devkit/architect/testing';
import { schema } from '@angular-devkit/core';
import { join } from 'path';
import { AzureDeployBuilderSchema } from './schema';
import { Tree } from '@angular-devkit/schematics';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { vol } from 'memfs';
import { stripIndents } from '@angular-devkit/core/src/utils/literals';
import { readFileSync } from 'fs';
import { mockHTML } from './__mocks__';

jest.mock('fs', () => require('memfs').fs);

const options: AzureDeployBuilderSchema = {
  containerName: 'az-deploy-test',
  deployDir: 'dist/apps/demo'
};

describe('Command Runner Builder', () => {
  let architect: Architect;
  let architectHost: TestingArchitectHost;
  let appTree: Tree;

  beforeEach(async () => {
    // TODO: mock azure
    vol.fromJSON(
      {
        './README.md': 'hello',
        './.nxignore': stripIndents`
          apps/demo/tmp.txt
          tmp/
        `,
        './.gitignore': stripIndents`
          *.js
          node_modules/
        `,
        './apps/demo/src/index.ts': 'console.log("hello");',
        './workspace.json': '{}',
        './dist/apps/demo/index.html': mockHTML.toString()
      },
      '/root'
    );

    const registry = new schema.CoreSchemaRegistry();
    registry.addPostTransform(schema.transforms.addUndefinedDefaults);

    architectHost = new TestingArchitectHost('/root', '/root/apps/demo');
    architect = new Architect(architectHost, registry);

    // This will either take a Node package name, or a path to the directory
    // for the package.json file.
    await architectHost.addBuilderFromPackage(join(__dirname, '../../..'));
    appTree = createEmptyWorkspace(Tree.empty());
    appTree.create('index.html', '');
    // createDirectory('/');
    // fileUtils.copyFile(
    //   join(__dirname, '__mocks__', 'index.html'),
    //   join('/root/')
    // );
  });

  it('can run', async () => {
    // A "run" can have multiple outputs, and contains progress information.
    const run = await architect.scheduleBuilder(
      '@datasitelabs/azure-deploy:build',
      options
    );
    // The "result" member (of type BuilderOutput) is the next output.
    const output = await run.result;

    // Stop the builder from running. This stops Architect from keeping
    // the builder-associated states in memory, since builders keep waiting
    // to be scheduled.
    await run.stop();

    // Expect that it succeeded.
    expect(output.success).toBe(true);
  });
});
