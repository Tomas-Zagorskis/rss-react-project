/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'istanbul',
      all: true,
      include: ['src/*'],
      exclude: ['src/vite-env.d.ts', 'src/entry-client.tsx', 'src/entry-server.tsx'],
    },
  },
  server: {
    host: true,
    port: 5173,
  },
});
