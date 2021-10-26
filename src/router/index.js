import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    title: "HomeSweatHome",
  },
  {
    path: '/ListUps',
    name: 'ListUps',
    meta: {
      title: "ListUps",
    },
    component: () => import('../views/ListUps.vue')
  },
  {
    path: '/Guide',
    name: 'Guide',
    component: () => import('../views/Guide.vue'),
    title: "Guide",
  },
  {
    path: '/Review',
    name: 'Review',
    component: () => import('../views/Review.vue'),
    title: "Review",
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  
})

export default router
