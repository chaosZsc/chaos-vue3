import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
};

export default defineConfig(() => {
  return {
    ...config,
    plugins: [
      vue(),
    ],
  };
});
