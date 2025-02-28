import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import importToCDN from 'vite-plugin-cdn-import' // Correct import

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  }
})
