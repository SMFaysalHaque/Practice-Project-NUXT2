export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'practice-nuxt2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ['@nuxtjs/i18n', {
    locales: [
      {
        name: 'Italiano',
        code: 'it',
        iso: 'it-IT',
        file: 'it-IT.js'
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js'
      },
      {
        name: 'Bangla',
        code: 'bn',
        iso: 'bn-BN',
        file: 'bn-BN.js'
      },
    ],
    langDir: 'lang/',
    defaultLocale: 'en',
    vueI18n: {
      numberFormats: {
        en: {
          currency: {
            style: 'currency',
            currency: 'USD',
            notation: 'compact'
          },
          decimal: {
            style: 'decimal',
          },
          percent: {
            style: 'percent',
          }
        },
        // it: {
        //   currency: {
        //     style: 'currency',
        //     currency: ''
        //   }
        // },
        bn: {
          currency: {
            style: 'currency',
            currency: 'BDT',
            notation: 'compact'
          },
          decimal: {
            style: 'decimal',
          },
          percent: {
            style: 'percent',
          }
        },
      },
      dateTimeFormats: {
        en: {
          short: {
            year: 'numeric', month: 'short', day: 'numeric'
          },
          long: {
            year: 'numeric', month: 'short', day: 'numeric',
            weekday: 'short', hour: 'numeric', minute: 'numeric'
          }
        },
        bn: {
          short: {
            year: 'numeric', month: 'short', day: 'numeric'
          },
          long: {
            year: 'numeric', month: 'short', day: 'numeric',
            weekday: 'short', hour: 'numeric', minute: 'numeric'
          }
        },
      }
    }
  }]
],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  }
}
