// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href:"favicon.png", }],
      meta: [
        { property: 'og:title', content: 'Nav-J Development' },
        { property: 'og:description', content: 'Software developer based in Australia' },
        { property: 'og:url', content: 'https://nav-j-dev.com/' },
      ],
    }
  }
})
