import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Render injects a RENDER=true env variable.
  // Use '/' for Render and '/pharma-website/' for GitHub Pages
  base: process.env.RENDER ? '/' : '/pharma-website/',
})
