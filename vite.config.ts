import path from "node:path";
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({ 
    base: '/apps/questions-de-cours/',
    plugins: [tailwindcss(), svelte()],
    resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
    },
  },
 });
