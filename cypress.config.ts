import { defineConfig } from 'cypress';
import coverage from '@cypress/code-coverage/task';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
      url: 'http://localhost:5173/__coverage__',
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      coverage(on, config);
      return config;
    },
    baseUrl: 'http://localhost:5173',
    trashAssetsBeforeRuns: true,
  },
});
