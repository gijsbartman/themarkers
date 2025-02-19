import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 2401,
    proxy: {
      '/api': {
        target: 'http://localhost:2401',
        changeOrigin: true,
      },
    },
  },
});
