// vue.config.js
// webpack 설정을 추가
module.exports = {
  css : {
      loaderOptions : {
        scss : {
          additionalData: `
            @import "@/assets/scss/_variables.scss";
            @import "@/assets/scss/_reset.scss";
            @import "@/assets/scss/_common.scss";
          `
        }
      }
  },
  devServer: {
    overlay: false
  },
  configureWebpack: {
    entry: ["babel-polyfill", "./src/main.js"]
  }
}