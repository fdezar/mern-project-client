import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'silk-project-server.vercel.app',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     }
  //   }
  // },

  // mirar documentación de Vite en server.proxy
  // path.replace. Target, changeorigin, rewrite
  plugins: [react()],
})
