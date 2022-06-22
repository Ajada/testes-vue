import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/dashboard/DashView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/AboutView.vue')
  },
  /** ROTA ANINHADA
   * COMO A ROTA CONTACT É UMA ROTA ANINHADA PRECISAMOS DEFINIR UM <router-view /> DENTRO DOP COMPONENT PAI, NESSE CASO O ContactView.vue
   */
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/contact/ContactView.vue'),
    children: [
      {
        path: ':id',
        name: 'contact-details',
        component: () => import('@/views/contact/ContactDetailsView.vue')
      },
      {
        path: '',
        name: 'default-preview-details',
        component: () => import('@/components/contact/component/ContactPreviewDefault.vue')
      }
    ]
  }
]

const routerMode = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'selected',
  base: process.env.BASE_URL,
  routes
})

export default routerMode
