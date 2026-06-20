// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const setupFile = path.resolve(__dirname, './jest-setup.js');
const cssMockFile = path.resolve(__dirname, './__mocks__/cssMock.js');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: [setupFile],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'jest-esm-transformer',
    '^.+\\.css$': cssMockFile,
  },
  transformIgnorePatterns: ['/node_modules/(?!.*\\.css$)'],
  moduleNameMapper: {
    '^prosemirror-model$': path.resolve(__dirname, 'node_modules/prosemirror-model'),
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
      diagnostics: false,
    },
  },
  snapshotSerializers: ['jest-serializer-html'],
  testMatch: ['**/__test__/**/*.spec.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
};
