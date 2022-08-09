import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const { PORT = 3000 } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'express-app/src',
  },
})
