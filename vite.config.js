import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import React from 'react';
import ReactDOM from 'react-dom';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [react, React, ReactDOM]
    }
  }
})
