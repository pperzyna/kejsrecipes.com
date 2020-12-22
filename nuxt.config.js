import redirectSSL from 'redirect-ssl';

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  pageTransition: 'fade',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: `%s - Kej's recipes`,
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/bulma.scss', '~/assets/css/styles.scss'],

  // Variables CSS(https://github.com/nuxt-community/style-resources-module)
  styleResources: {
    scss: ['~/assets/css/variables.scss'],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  serverMiddleware: [
    redirectSSL.create({
      enabled: process.env.NODE_ENV === 'production',
    }),
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/google-fonts'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/pwa', '@nuxtjs/axios', '@nuxtjs/robots', '@nuxtjs/sitemap', '@nuxtjs/style-resources'],

  axios: {
    baseURL: 'https://strapi.kejsrecipes.com/',
  },

  // googleFonts - Configuration (https://github.com/nuxt-community/google-fonts-module)
  googleFonts: {
    families: {
      'La+Belle+Aurore': [400],
      'Open+Sans': [400, 600],
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    loaders: {
      cssModules: {
        modules: {
          localIdentName: '[hash:base64:4]',
        },
      },
    },
    extractCSS: true,
  },

  router: {
    trailingSlash: true,
  },

  sitemap: {
    hostname: 'http://kejsrecipes.com/',
    gzip: true,
    trailingSlash: true,
  },
};
