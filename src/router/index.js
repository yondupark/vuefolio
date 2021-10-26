import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    title: "HomeSweatHome - S.W.Portfolio",
  },
  {
    path: '/ListUps',
    name: 'ListUps',
    meta: {
      title: "ListUps - S.W.Portfolio",
    },
    component: () => import('../views/ListUps.vue')
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
