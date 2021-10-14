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
