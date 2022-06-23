import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/DashView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/AboutView.vue')
  },
  {
    path: '/contact',
    // name: 'contact',
    component: () => import('@/views/contact/ContactView.vue'),
    children: [
      {
        path: ':id',
        name: 'contact-details',
        component: () => import('@/components/contact/component/ContactDetailsView.vue')
      },
      {
        path: '',
        name: 'default-preview-details',
        component: () => import('@/components/contact/component/ContactPreviewDefault.vue')
      }
    ]
  },
  {
    path: '/contact/:id/edit',
    name: 'contact-edit',
    props: true,
    component: () => import('@/components/contact/component/ContactEdit.vue')
  },
  {
    path: '/*/*',
    name: 'error_400',
    component: () => import('@/components/404/home/HomeView404')
  },
  {
    path: '*',
    name: 'error_404',
    component: () => import('@/components/404/home/HomeView404')
  }
]

const routerMode = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'selected',
  base: process.env.BASE_URL,
  routes
})

routerMode.beforeEach((to, from, next) => {
  console.log('beforeEach')
  next()
})

routerMode.afterEach((to, from) => {
  console.log('afterEach')
})

export default routerMode
