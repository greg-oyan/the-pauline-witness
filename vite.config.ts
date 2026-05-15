import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages compatible: base must match the repo name when served from
// https://<user>.github.io/the-pauline-witness/.
export default defineConfig({
  base: './',
  plugins: [react()],
})
