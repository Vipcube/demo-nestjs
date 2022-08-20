/* eslint-disable */
export default {
  displayName: 'logging-fluentd',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  coverageDirectory: '../../coverage/apps/logging-fluentd',
};
