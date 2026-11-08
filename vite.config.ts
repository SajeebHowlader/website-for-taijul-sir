import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/website-for-tajul-sir/',
  plugins: [react()],
})