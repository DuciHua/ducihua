import { defineConfig } from 'vite'

export default defineConfig({
  base: '/./',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        apple: 'apple.html',
        mbages: 'mbages.html',
        taiganow: 'taiganow.html',
        pom: 'devyt.html',
      },
    },
  },
})