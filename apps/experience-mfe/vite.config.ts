import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), federation({ name: 'experience-mfe', filename: 'remoteEntry.js', exposes: { './Experience': './src/App.tsx' }, shared: { react: { singleton: true }, 'react-dom': { singleton: true } } })],
  server: { port: 5002 },
  preview: { port: 5002 },
  build: { target: 'esnext' },
})
