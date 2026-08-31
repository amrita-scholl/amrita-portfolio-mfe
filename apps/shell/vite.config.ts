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
          entry : 'https://amrita-portfolio-mfe-about-mfe.vercel.app/remoteEntry.js',
        },
        'experience-mfe': { type: 'module', name: 'experience-mfe', entry: 'https://amrita-portfolio-mfe-experience-mfe.vercel.app/remoteEntry.js' },
        'projects-mfe': { type: 'module', name: 'projects-mfe', entry: 'https://amrita-portfolio-mfe-projects-mfe.vercel.app/remoteEntry.js' },
        'skills-mfe': { type: 'module', name: 'skills-mfe', entry: 'https://amrita-portfolio-mfe-skills-mfe.vercel.app/remoteEntry.js' },
        'contact-mfe': { type: 'module', name: 'contact-mfe', entry: 'https://amrita-portfolio-mfe-contact-mfe.vercel.app/remoteEntry.js' },
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