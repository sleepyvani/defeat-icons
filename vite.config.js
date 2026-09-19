import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, createLogger } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logger = createLogger();
const originalWarn = logger.warn.bind(logger);
const originalWarnOnce = logger.warnOnce.bind(logger);

logger.warn = (msg, options) => {
  if (typeof msg === 'string' && msg.includes('points to missing source files')) {
    return;
  }
  originalWarn(msg, options);
};

logger.warnOnce = (msg, options) => {
  if (typeof msg === 'string' && msg.includes('points to missing source files')) {
    return;
  }
  originalWarnOnce(msg, options);
};

export default defineConfig({
  customLogger: logger,
  resolve: {
    alias: [
      {
        find: /^defeat-icons-react$/,
        replacement: path.resolve(__dirname, 'packages/defeat-icons-react/index.js')
      },
      {
        find: /^defeat-icons-react\/(?:icons\/)?(.*?)(\.js)?$/,
        replacement: path.resolve(__dirname, 'packages/defeat-icons-react/icons/$1.js')
      }
    ]
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist-demo',
    sourcemap: false
  },
  server: {
    port: 3000,
    open: false
  }
});
