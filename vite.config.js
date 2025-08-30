import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // Add this import

export default defineConfig({
  plugins: [
    react(),
    tailwindcss() // Add Tailwind CSS v4 plugin
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Add this alias configuration
    },
  },
})