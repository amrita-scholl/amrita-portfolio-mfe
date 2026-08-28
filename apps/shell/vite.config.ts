import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),

    federation({
      name: 'shell',

      remotes: {
        'about-mfe': {
          type: "module",
          name: "about-mfe",
          entry : 'http://localhost:5001/remoteEntry.js',
        },
        'experience-mfe': { type: 'module', name: 'experience-mfe', entry: 'http://localhost:5002/remoteEntry.js' },
        'projects-mfe': { type: 'module', name: 'projects-mfe', entry: 'http://localhost:5003/remoteEntry.js' },
        'skills-mfe': { type: 'module', name: 'skills-mfe', entry: 'http://localhost:5004/remoteEntry.js' },
        'contact-mfe': { type: 'module', name: 'contact-mfe', entry: 'http://localhost:5006/remoteEntry.js' },
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
    port: 5000,
  },

  preview: {
    port: 5000,
  },

  build: {
    target: 'esnext',
  },
});