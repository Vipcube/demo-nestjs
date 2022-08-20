const nxPreset = require('@nrwl/jest/preset').default;

module.exports = {
  ...nxPreset,
  moduleFileExtensions: ['ts', 'js', 'html', 'json'],
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  resolver: "@nrwl/jest/plugins/resolver",
};
