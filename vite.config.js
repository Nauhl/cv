import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/

// static site on gh
export default defineConfig({
  plugins: [svelte()],
  base: '/cv/',
})
