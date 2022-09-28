// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  // incremental: true,
  mutate: [
    'src/**/*.ts?(x)',
    '!src/**/*.+(test|spec|stories|styled|snap)*',
    // '!src/**/__mocks__/**/*',
  ],
  packageManager: 'npm',
  reporters: ['html', 'clear-text', 'progress', 'dashboard'],
  testRunner: 'jest',
  thresholds: { high: 90, low: 88, break: 85 },
};

export default config;
