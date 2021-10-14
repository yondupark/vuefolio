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
    path: '/Portfolio',
    name: 'Portfolio',
    meta: {
      title: "Portfolio - S.W.Portfolio",
    },
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
    path: '/Review',
    name: 'Review',
    component: () => import('../views/Review.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
