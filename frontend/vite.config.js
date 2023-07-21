import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://immense-stream-10229-548508c98736.herokuapp.com/',
        changeOrigin: true
      }
    }
  }
})
