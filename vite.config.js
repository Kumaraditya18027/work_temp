import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['chunk-I4MZPW7S.js'] // Exclude the problematic chunk
  } // Close the optimizeDeps object
}) // Close the defineConfig function
