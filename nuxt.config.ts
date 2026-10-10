// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  components: true,
  pages: true,

  modules: ['nuxt-aos'],

  aos: {
    duration: 500,
    once: true,
    easing: 'ease-out-quint',
    offset: 0,
    anchorPlacement: 'top-bottom',
  },

  css: [
    '~/public/assets/styles/style.scss',
    '@splidejs/vue-splide/css',
  ],

  plugins: [
    { src: '~/plugins/vue-splide', mode: 'client' },
  ],

  nitro: {
    prerender: {
      routes: ['/', '/projects'],
    },
  },

  router: {
    options: {
      scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          return { behavior: 'smooth' };
        } else if (savedPosition) {
          return savedPosition;
        } else {
          return { x: 0, y: 0 };
        }
      },
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'theme-color', content: '#0ead69' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: 'Umair Dev' },
      ],
      link: [
        // Web App Manifest (enables "Add to Home Screen" / PWA install)
        { rel: 'manifest', href: '/manifest.json' },
        // Apple Touch Icon (for iOS home screen)
        { rel: 'apple-touch-icon', href: '/assets/logo.png' },
        // DNS prefetch + preconnect for Google Fonts
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        // Poppins — only weights actually used (400, 500, 600)
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap' },
        // Decorative fonts used in hero / navbar logo
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&display=swap' },
        // Font Awesome removed — all icons are inline SVGs
      ],
    },
  },
})