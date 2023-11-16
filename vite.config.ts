import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'



// https://vitejs.dev/config/
export default defineConfig({
  //base: "/Nimbl-Vue3/",
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "@vueuse/core": ["@vueuse/core"],
          "gsap": ['gsap'],
          "@formkit/auto-animate": ['@formkit/auto-animate'],
          "motion": ['motion'],
          "vue3-apexcharts": ['vue3-apexcharts'],
          "apexcharts": ['apexcharts'],
      }
      }
    }
  }
})
