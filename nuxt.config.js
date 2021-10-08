export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Копи-трейд платформа для трейдеров APIX',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=0.9' },
      { hid: 'description', name: 'description', content: '' },
      { property: 'og:url', content: 'http://apix.trade' },
      {
        property: 'og:title',
        content: 'Копи-трейд платформа для трейдеров APIX',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/apix-trade-landing/photo.png' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/apix-trade-landing/favicon.ico',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  styleResources: {
    scss: [
      '@/styles/variables.scss',
      '@/styles/main.scss',
      '@/styles/normalize.scss',
      '@/styles/mixins.scss',
      '@/styles/typography.scss',
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-scroll-reveal', ssr: false },
    { src: '@/plugins/v-click-outside', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/svg',
    '@nuxtjs/style-resources',
    [
      'nuxt-font-loader-strategy',
      {
        ignoreLighthouse: true,
        ignoredEffectiveTypes: ['2g', 'slow-2g'],
        fonts: [
          {
            fileExtensions: ['woff2', 'woff'],
            fontFamily: 'ProximaNova',
            fontFaces: [
              {
                localSrc: ['ProximaNovaBlack'],
                src: '@/assets/fonts/ProximaNovaBlack',
                fontWeight: 900,
                fontStyle: 'normal',
              },
              {
                localSrc: ['ProximaNovaBold'],
                src: '@/assets/fonts/ProximaNovaBold',
                fontWeight: 'bold',
                fontStyle: 'normal',
              },
              {
                localSrc: ['ProximaNovaSemibold'],
                src: '@/assets/fonts/ProximaNovaSemibold',
                fontWeight: 600,
                fontStyle: 'normal',
              },
              {
                localSrc: ['ProximaNovaRegular'],
                src: '@/assets/fonts/ProximaNovaRegular',
                fontWeight: 400,
                fontStyle: 'normal',
              },
              {
                localSrc: ['ProximaNovaLight'],
                src: '@/assets/fonts/ProximaNovaLight',
                fontWeight: 300,
                fontStyle: 'normal',
              },
            ],
          },
        ],
      },
    ],
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'ru',
            file: 'ru.js',
          },
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'ru',
        detectBrowserLanguage: false,
      },
    ],
    [
      'nuxt-compress',
      {
        gzip: {
          cache: true,
        },
        brotli: {
          threshold: 10240,
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  server: {
    host: '0', // default: localhost
  },

  generate: {
    dir: 'docs',
  },

  router: {
    base: '/apix-trade-landing',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // postcss: {
    //   plugins: {
    //     // Disable `postcss-url`
    //     'postcss-url': false,
    //   },
    //   preset: {
    //     autoprefixer: {
    //       flexbox: true,
    //       grid: false,
    //       overrideBrowserslist: ['last 50 versions', '> 1%', 'ie 8', 'ie 7'],
    //     },
    //   },
    // },
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(mov)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      })
    },
  },
}
