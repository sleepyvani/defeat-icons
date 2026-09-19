import fs from 'node:fs';
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

function stripDistSourcemap() {
  return {
    name: 'strip-dist-sourcemap',
    enforce: 'pre',
    async load(id) {
      const cleanId = id.split('?')[0];
      if (cleanId.includes('/dist/components/') && cleanId.endsWith('.js')) {
        const content = await fs.promises.readFile(cleanId, 'utf-8');
        return {
          code: content.replace(/\/\/#\s*sourceMappingURL=.*/g, ''),
          map: { mappings: '' }
        };
      }
    },
    transform(code, id) {
      if (id.includes('/dist/components/')) {
        return {
          code: code.replace(/\/\/#\s*sourceMappingURL=.*/g, ''),
          map: { mappings: '' }
        };
      }
    }
  };
}

export default defineConfig({
  customLogger: logger,
  plugins: [
    stripDistSourcemap(),
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
