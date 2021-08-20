import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/Listsup',
    name: 'Listsup',
    component: () => import('../views/Listsup.vue')
  },
  {
    path: '/Guide',
    name: 'Guide',
    component: () => import('../views/Guide.vue')
  },
  {
    path: '/Whoami',
    name: 'Whoami',
    component: () => import('../views/Whoami.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
