// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "vue3-carousel/dist/carousel.css",
    "~/assets/scss/main.scss",
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  app: {
    head: {
      title: "eCommerce Nuxt",
      // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      BASE_URL:  'https://dev.kerloper.com/',
    },
  },
})