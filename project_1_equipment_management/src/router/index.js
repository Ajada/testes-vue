import Vue from 'vue'
import VueRouter from 'vue-router'
import events from '@/event'
import HomeView from '../views/app/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/layout/LoginView.vue')
  },
  {
    path: '/',
    alias: '/home',
    name: 'home',
    meta: { authenticate: true },
    component: HomeView
  },
  {
    path: '/leased',
    name: 'leased-appliances',
    component: () => import('@/views/app/LeasedView.vue')
  },
  {
    path: '/inventory',
    name: 'inventory',
    component: () => import('@/views/app/InventoryView.vue')
  },
  {
    path: '/settings',
    name: 'config',
    component: () => import('@/views/app/SettingsView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'selected',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(params => params.meta.autenthicate)) {
    if (!events.authenticate) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
      return
    }
  }
  next()
})

export default router
