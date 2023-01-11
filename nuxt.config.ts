
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default ({
  router: {
    base: '/',
  },
  app: {
    buildAssetsDir: '/_nuxt/',
    baseURL: '/',
  },
  target: 'static',
  generate: {
    dir: 'dist',
  },

  modules: ['@nuxtjs/tailwindcss'],

})
