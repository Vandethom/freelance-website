// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/icon',
    '@nuxt/image'
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      title: 'Hummingbird Dev - Développeur Web Freelance',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Développeur web freelance spécialisé dans la création de sites web et applications modernes sur mesure. Solutions digitales performantes pour votre entreprise.' 
        },
        { name: 'author', content: 'Thomas Vandenbussche' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://thomas-vandenbussche.fr' },
        { property: 'og:title', content: 'Hummingbird Dev - Développeur Web Freelance' },
        { 
          property: 'og:description', 
          content: 'Créons ensemble votre présence digitale remarquable. Sites web et applications modernes sur mesure avec une attention personnalisée.' 
        },
        { property: 'og:image', content: 'https://thomas-vandenbussche.fr/images/social-card.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:site_name', content: 'Hummingbird Dev' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://thomas-vandenbussche.fr' },
        { name: 'twitter:title', content: 'Hummingbird Dev - Développeur Web Freelance' },
        { 
          name: 'twitter:description', 
          content: 'Créons ensemble votre présence digitale remarquable. Sites web et applications modernes sur mesure.' 
        },
        { name: 'twitter:image', content: 'https://thomas-vandenbussche.fr/images/social-card.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://thomas-vandenbussche.fr' }
      ]
    }
  }
})