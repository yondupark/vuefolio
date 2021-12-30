// vue.config.js
// webpack 설정을 추가
module.exports = {
  css : {
      loaderOptions : {
        sass : {
          additionalData: `
            @import "@/assets/scss/reset.scss";
            @import "@/assets/scss/common.scss";
          `
        },
        scss : {
          additionalData: `
            @import "@/assets/scss/reset.scss";
            @import "@/assets/scss/common.scss";
          `
        }
      }
  }
}