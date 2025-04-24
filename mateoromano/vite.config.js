import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './' // ⚠️ Muy importante para que funcione en Vercel o GitHub Pages
})
