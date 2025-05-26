import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://ecom-server-0oqa.onrender.com",
        changeOrigin: true,
        secure: false, // 👈 This disables strict SSL validation for dev
      }
    }
  }
})
