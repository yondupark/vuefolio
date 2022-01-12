import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import anime from 'animejs/lib/anime.es.js'

createApp(App).use(router, anime).mount('#app')
