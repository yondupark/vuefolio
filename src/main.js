import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'; //axios 호출
import router from './router' //설정 라우터 호출
import Scrollbar from 'smooth-scrollbar'; //스무스하게 스크롤
import VueI18n from 'vue-i18n' //다국어

// 다국어 설정
Vue.use(VueI18n)

Vue.config.productionTip = true;
Vue.prototype.$axios = axios; //전역변수로 설정 컴포넌트에서 this.$axios 호출할 수 있음

const messages = {
  en: {
    message: {
      hello: 'hello, buddy!'
    }
  },
  ko: {
    message: {
      hello: '안녕 친구!'
    }
  }
}
const i18n = new VueI18n(
  {
    locale: 'ko',
    messages
  }
)

// 부드러운 스크롤바 삽입
Scrollbar.init(document.querySelector('body'));

// 페이지별 메타 타이틀 설정
const makeTitle = (title) =>
title ? `${title}  - S.W.Park Portfolios` : "Home Sweat Home - S.W.Park Portfolios";
router.afterEach((to, from, next) => {
  Vue.nextTick(() => {
    document.title = makeTitle(to.meta.title);
  });
  next();
});

// 뷰 기본 설정
new Vue({
  render: h => h(App),
  router,
  i18n,
}).$mount('#app')
