import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  base: './',
  plugins: [
    handlebars({
      partialDirectory: [
        resolve(__dirname, 'src/partials'),
        resolve(__dirname, 'src/partials/demo'),
      ],
    }),
  ],
  server: {
    host: true,
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
});
