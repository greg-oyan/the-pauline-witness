import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages compatible: base matches the repo path when served from
// https://<user>.github.io/the-pauline-witness/.
export default defineConfig({
  base: '/the-pauline-witness/',
  plugins: [react()],
})
