// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image', '@nuxt/ui', '@nuxt/fonts', '@nuxt/icon'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Victor Teodoro',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ]
    }
  },
  ui: {
    theme: {
      colors: [
        'brand',
        'accent',
        'paragraph',
        'background',
      ]
    }
  }
})