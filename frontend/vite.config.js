import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://dry-wave-00338-94a07424ea60.herokuapp.com/',
        changeOrigin: true
      }
    }
  }
})
