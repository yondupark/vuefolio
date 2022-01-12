import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAnime from 'vue-animejs';


createApp(App).use(router, VueAnime).mount('#app')
