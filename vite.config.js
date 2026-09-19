import { defineConfig, createLogger } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

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
