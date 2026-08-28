import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), federation({ name: 'contact-mfe', filename: 'remoteEntry.js', exposes: { './Contact': './src/App.tsx' }, shared: { react: { singleton: true }, 'react-dom': { singleton: true } } })],
  server: { port: 5006 },
  preview: { port: 5006 },
  build: { target: 'esnext' },
})
