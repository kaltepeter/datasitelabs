module.exports = {
  name: 'azure-deploy',
  preset: '../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html', 'json'],
  coverageDirectory: '../../coverage/libs/azure-deploy',
  setupFiles: ["dotenv/config"],
  testEnvironment: 'node'
};
