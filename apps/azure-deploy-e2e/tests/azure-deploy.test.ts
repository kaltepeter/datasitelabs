import {
  checkFilesExist,
  ensureNxProject,
  readJson,
  runNxCommandAsync,
  uniq
} from '@nrwl/nx-plugin/testing';
import { join } from 'path';

function loadEnvVars(path?: string) {
  if (path) {
    const result = require('dotenv').config({ path });
    if (result.error) {
      throw result.error;
    }
  } else {
    try {
      require('dotenv').config();
    } catch (e) {}
  }
}

describe('azure-deploy e2e', () => {
    beforeAll(() => {
      loadEnvVars(join('..', '.env'));
      if (!process.env.STORAGE_CONNECTION_STRING) {
        console.error(`Please provision the version you are publishing`);
        process.exit(1);
      }
    });

  it('should create azure-deploy', async done => {
    const plugin = uniq('azure-deploy');
    ensureNxProject('@ka/azure-deploy', 'dist/libs/azure-deploy');
    await runNxCommandAsync(`generate @ka/azure-deploy:azureDeploy ${plugin}`);

    const result = await runNxCommandAsync(`build ${plugin}`);
    expect(result.stdout).toContain('Builder ran');

    done();
  });

  describe('--directory', () => {
    it('should create src in the specified directory', async done => {
      const plugin = uniq('azure-deploy');
      ensureNxProject('@ka/azure-deploy', 'dist/libs/azure-deploy');
      await runNxCommandAsync(
        `generate @ka/azure-deploy:azureDeploy ${plugin} --directory subdir`
      );
      expect(() =>
        checkFilesExist(`libs/subdir/${plugin}/src/index.ts`)
      ).not.toThrow();
      done();
    });
  });

  describe('--tags', () => {
    it('should add tags to nx.json', async done => {
      const plugin = uniq('azure-deploy');
      ensureNxProject('@ka/azure-deploy', 'dist/libs/azure-deploy');
      await runNxCommandAsync(
        `generate @ka/azure-deploy:azureDeploy ${plugin} --tags e2etag,e2ePackage`
      );
      const nxJson = readJson('nx.json');
      expect(nxJson.projects[plugin].tags).toEqual(['e2etag', 'e2ePackage']);
      done();
    });
  });
});
