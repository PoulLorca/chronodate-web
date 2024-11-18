// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },  
  modules: ['@nuxt/ui'],
  css: [
    '~/assets/css/main.css'
  ],
  app:{
    head:{
      title: 'ChronoDate website',
      meta: [
        { name: 'description', content: 'ChronoDate bot website. An open-source Bluesky bot that posts daily progress updates of the year and will soon allow you to recall messages and more.' },
        { name: 'keywords', content: 'ChronoDate, Bluesky, bot, open-source, daily updates, social media, messages, recall, technology, year progress' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // Open Graph Meta Tags
        { property: 'og:title', content: 'Chronodate Website' },
        { property: 'og:description', content: 'An open-source Bluesky bot posting daily progress of the year and more.' },
        { property: 'og:image', content: '/og-image.png' }, 
        { property: 'og:url', content: 'https://your-domain.com' }, // Replace with your actual domain
        // Twitter Card Meta Tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'ChronoDate Website' },
        { name: 'twitter:description', content: 'An open-source Bluesky bot posting daily progress of the year and more.' },
        { name: 'twitter:image', content: '/og-image.png' },
      ]
    }
  }
})