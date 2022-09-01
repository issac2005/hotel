import Vue from 'vue'
import VueRouter from 'vue-router'
import {isMobile} from '../util/judge'
window.isMobile = isMobile();


Vue.use(VueRouter)

export const mobileRoutes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/mobile/index.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "about" */ '../views/mobile/search.vue')
  },
  {
    path: '/filter',
    name: 'filter',
    component: () => import(/* webpackChunkName: "about" */ '../views/mobile/filter.vue')
  }
]

export const pcRoutes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pc/index.vue')
  }
]

let routes = window.isMobile ? mobileRoutes : pcRoutes;

const router = new VueRouter({
  routes
})

export default router
