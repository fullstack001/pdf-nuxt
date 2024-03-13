// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true }
// })




export default defineNuxtConfig({
  // Other Nuxt configuration options
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', 'nuxt-mdi'],


  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('md-')
    }
  },
  axios: {
    baseURL: 'http://localhost:5000', // Your API base URL
  },
  plugins: [
    { src: '~/plugins/dashboard.ts', mode: 'client' }
  ],

  css: [
    '~/assets/bootstrap.css'
  ],
  i18n: {
    vueI18n: './i18n.config.js' // if you are using custom path, default
  }
});