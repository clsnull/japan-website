export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '京都玉崎株式会社',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'Description', content: '当社は計測機器、光源装置、産業設備など約1000社のメーカーを取り扱っております。' },
      { hid: 'Keywords', name: 'Keywords', content: '京都玉崎株式会社,京都玉崎,玉崎,京都,計測機器,光源装置,産業設備,産業設備' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/swiper',
    }, {
      src: '@/plugins/maps',
    }, {
      src: '@/plugins/axios',
    }
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
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: '/',
  },
  proxy: {
    '/api': {
      // target: 'http://localhost:8081/api',
      target: 'http://www.tamasaki-group.com/api',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api', // 把 /api 替换成 /
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  tailwindcss: {
    configPath: '~/tailwind.config.js',
  },
  server: {
    host: '0.0.0.0'
  }
}
