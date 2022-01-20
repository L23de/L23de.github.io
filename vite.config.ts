import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  },

  plugins: [
    vue({
      template: { transformAssetUrls }
    }),

    quasar({
      autoImportComponentCase: 'combined',
      sassVariables: 'src/css/quasar-variables.sass'
    }),
  ]
})