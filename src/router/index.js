import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/homePage/homepage.vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: () => import('../layout/menuIndex'),
    redirect: '/users',
    children: [
      {
        path: 'users',
        name: 'users',
        component: () => import('@/views/users/usersIndex.vue')
      },
      {
        path: 'categories',
        name: 'categories',
        component: () => import('@/views/categories/index.vue')
      },
      {
        path: 'goods',
        name: 'goods',
        component: () => import('@/views/goods/index.vue')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('@/views/orders/index.vue')
      },
      {
        path: 'params',
        name: 'params',
        component: () => import('@/views/params/index.vue')
      },
      {
        path: 'reports',
        name: 'reports',
        component: () => import('@/views/reports/index.vue')
      },
      {
        path: 'rights',
        name: 'rights',
        component: () => import('@/views/rights/index.vue')
      },
      {
        path: 'rights2',
        name: 'rights2',
        component: () => import('@/views/rights2/index.vue')
      },
      {
        path: 'rights3',
        name: 'rights3',
        component: () => import('@/views/rights3/index.vue')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/LoginIndex.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
