import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["./node_modules/react", "./node_modules/react-dom", "./node_modules/react-dom/client"]
    }
  }
})
