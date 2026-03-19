// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image', '@nuxt/ui', '@nuxt/fonts', '@nuxt/icon'],
  vite: {
    plugins: [(await import('@tailwindcss/vite')).default()],
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'holl0w',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ] 
    }
  },
  content: {
    renderer: {
      anchorLinks: false
    }
  },
  ui: {
    theme: {
      colors: [
        'cyan-brand',
        'white-brand',
        'black-brand',
        'dark-blue-brand'
      ]
    }
  },
  fonts: {
    families: [
      { name: 'Fira Mono', provider: 'google', weights: ['100 900'] },
    ]
  }
})