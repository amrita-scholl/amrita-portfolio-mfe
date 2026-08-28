import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), federation({ name: 'projects-mfe', filename: 'remoteEntry.js', exposes: { './Projects': './src/App.tsx' }, shared: { react: { singleton: true }, 'react-dom': { singleton: true } } })],
  server: { port: 5003 },
  preview: { port: 5003 },
  build: { target: 'esnext' },
})
