// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  components: true,
  pages: true,
  server: {
    host: '0.0.0.0', 
    port: 3000,
  },

  // modules: ['@nuxtjs/strapi'],
  modules: ['@nuxtjs/aos', 'nuxt-aos'],

  aos: {
    // Add AOS global options here
    duration: 1000, // Animation duration in ms
    once: true, // Animation happens only once
    easing: 'ease-in-out', // Default easing for animations
  },

  css: [
    '~/public/assets/styles/style.scss',
    '@splidejs/vue-splide/css'
  ],

  plugins: [
    { src: '~/plugins/vue-splide', mode: 'client' },
  ],

  router: {
    options: {
      scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          return {
            // selector: to.hash,
            behavior: 'smooth',
          };
        } else if (savedPosition) {
          return savedPosition;
        } else {
          return { x: 0, y: 0 };
        }
      },
    },
  },

  // strapi: {
  //   url: 'http://localhost:1337'
  // }
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap' },
      
      ]
    }
  },

  modules: ['nuxt-aos']
})