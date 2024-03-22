import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_PROXY_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@reduxjs/toolkit': '@reduxjs/toolkit/dist/redux-toolkit.esm.js',
    },
  },
})
