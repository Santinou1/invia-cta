import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5521
  },
  preview: {
    host: '0.0.0.0',
    port: 5521
  },
  build: {
    // Optimizaciones para SEO y performance
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom']
        }
      }
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000
  }
})
