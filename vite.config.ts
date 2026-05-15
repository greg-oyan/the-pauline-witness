import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages compatible. Relative './' so the build is portable across
// any subpath (works under https://<user>.github.io/the-pauline-witness/
// and under any other path or local file serve). HashRouter handles
// in-app routing without server rewrites.
export default defineConfig({
  base: './',
  plugins: [react()],
})
