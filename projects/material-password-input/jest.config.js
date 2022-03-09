module.exports = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^lodash-es$': 'lodash'
  },
  testMatch: [
    '<rootDir>/projects/material-password-input/src/**/*.spec.ts',
  ],
  collectCoverage: false,
  collectCoverageFrom: [
    '**/src/**/*.ts',
    '!**/node_modules/**',
    '!**/src/**/*.module.ts',
    '!test/**',
    '!**/polyfills.ts',
    '!**/environments/**',
    '!**/src/setupJest.ts'
  ]
};
