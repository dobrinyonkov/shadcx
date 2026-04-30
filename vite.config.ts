import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.BASE_PATH || '/shadcx/',
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
})
