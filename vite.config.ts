import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// AusRed Styling marketing site. Relative base so the build works under any
// path (GitHub Pages subpath or a root domain).
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  server: { port: 3003, host: true },
  preview: { port: 3003 },
})
