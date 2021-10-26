<template>
    <vueRouter/>
</template>

<script>
import vueRouter from './views/vueRouter';

export default {
  name: 'S.W.Vuefolio',
  components: {
    vueRouter,
  },

  created () {
    let locale = navigator.language || navigator.userLanguage
    locale = locale.substring(0, 2)
    if (locale !== 'ko') locale = 'en' // 한국어가 아닌 경우 무조건 영어로 설정
    this.$i18n.locale = locale
  }
};
</script>