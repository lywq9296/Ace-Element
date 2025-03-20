/// <reference types="vitest" />

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Jsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [vue(), Jsx()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
