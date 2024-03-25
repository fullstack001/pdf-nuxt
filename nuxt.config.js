import colors from 'vuetify/es5/util/colors'
import { I18N } from './config'


export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  //mode: 'spa',
  head: {
    titleTemplate: '%s - pdfden',
    title: 'pdfden',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
      // { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      // { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      // { name: 'description', content: 'PDFden.com - Free Online PDF Tools - Merge, Split, Compress, and More!' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:300,400,500,700|Satisfy,400italic' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Satisfy&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Zeyada&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Allura&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Handlee&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kristi&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Marck+Script&display=swap' }
    ],
    script: [
      { src: 'https://apis.google.com/js/api.js', type: 'text/javascript' }
    ]
  },
  loading: {
    color: '#FF7C03', // Change this to the desired color
    height: '2px' // Optionally, you can adjust the height of the progress bar
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
    '~/assets/scss/material-dashboard.scss',
    '@mdi/font/css/materialdesignicons.min.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-drawing-canvas.js', ssr: false },
    { src: '~/plugins/rating.js', ssr: false },
    { src: '~/plugins/vuelidate.js', mode: 'client' },
    { src: '~/plugins/crypto.js', mode: 'client' },
    { src: '~/plugins/vue-radial.js', mode: 'client' },
    '~/plugins/vue-material.js',
    '~/plugins/axios.js',
    '~/plugins/socket.client.js'

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  store: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    ['nuxt-i18n', I18N],
    '@nuxtjs/axios',
    'nuxt-sweetalert2',

  ],


  axios: {
    baseURL: 'https://api.pdfden.com/api',
  },
  publicRuntimeConfig: {
    axios: {
      baseURL: 'https://api.pdfden.com/api',
    }
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
