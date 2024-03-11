import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const PROXY_URL = import.meta.env.VITE_PROXY_URL;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: PROXY_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },

  // mirar documentación de Vite en server.proxy
  // path.replace. Target, changeorigin, rewrite
  plugins: [react()],
})
