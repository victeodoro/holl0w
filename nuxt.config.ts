// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image', '@nuxt/ui', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
  ui: {
    theme: {
      colors: [
        'brand',
        'accent',
        'background',
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'error'
      ]
    }
  }
})