import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),

    federation({
      name: 'about-mfe',

      filename: 'remoteEntry.js',

      exposes: {
        './About': './src/About.tsx',
      },

      shared: {
        react: {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
      },
    }),
  ],

  server: {
    port: 5001,
  },

  preview: {
    port: 5001,
  },

  build: {
    target: 'esnext',
  },
});