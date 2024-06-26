import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dns from 'dns';
import path from 'path';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 3000,
  },
});
