module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/common.scss";`
      },
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'ko',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
      includeLocales: false,
      enableBridge: true
    }
  }
}
