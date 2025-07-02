import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  // Bu kısım kritik
  base: './',
  plugins: [react()],
});
