/* eslint-disable */
export default {
  displayName: 'microservice-tcp-server',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  coverageDirectory: '../../coverage/apps/microservice-tcp-server',
};
