import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), federation({ name: 'skills-mfe', filename: 'remoteEntry.js', exposes: { './Skills': './src/App.tsx' }, shared: { react: { singleton: true }, 'react-dom': { singleton: true } } })],
  server: { port: 5004 },
  preview: { port: 5004 },
  build: { target: 'esnext' },
})
