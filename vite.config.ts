import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Project Pages URL: https://<user>.github.io/mx-spanish/
export default defineConfig({
  plugins: [react()],
  base: '/mx-spanish/',
})
