import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Jsx from '@vitejs/plugin-vue-jsx';

import eslint from 'vite-plugin-eslint';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), Jsx(), eslint()],
});
