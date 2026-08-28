import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), federation({ name: 'resume-mfe', filename: 'remoteEntry.js', exposes: { './Resume': './src/App.tsx' }, shared: { react: { singleton: true }, 'react-dom': { singleton: true } } })],
  server: { port: 5005 },
  preview: { port: 5005 },
  build: { target: 'esnext' },
})
