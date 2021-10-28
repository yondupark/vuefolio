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
    path: '/Myworks',
    name: 'myWorks',
    meta: {
      title: "My Works",
    },
    component: () => import('../views/Myworks.vue')
  },
  {
    path: '/Design',
    name: 'Design',
    component: () => import('../views/Design.vue'),
    meta: {
      title: "Design",
    },
  },
  {
    path: '/Review',
    name: 'Review',
    component: () => import('../views/Review.vue'),
    meta: {
      title: "Review",
    },
  },
  {
    path: '/Career',
    name: 'Career',
    component: () => import('../views/Career.vue'),
    meta: {
      title: "Career",
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  
})

export default router
