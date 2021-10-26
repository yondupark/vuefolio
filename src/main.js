import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Scrollbar from 'smooth-scrollbar';

Vue.config.productionTip = false

Scrollbar.init(document.querySelector('body'));

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

const makeTitle = (title) =>
title ? `${title}  - S.W.Park Portfolios` : "Home Sweat Home - S.W.Park Portfolios";

router.afterEach((to, from, next) => {
  Vue.nextTick(() => {
    document.title = makeTitle(to.meta.title);
  });
  next();
});