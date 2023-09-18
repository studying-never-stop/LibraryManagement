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
        path: 'books',
        name: 'books',
        component: () => import('@/views/books/index.vue')
      },
      {
        path: 'reports',
        name: 'reports',
        component: () => import('@/views/reports/index.vue')
      },
      {
        path: 'lend',
        name: 'lend',
        component: () => import('@/views/orders/lend.vue')
      },
      {
        path: 'return',
        name: 'return',
        component: () => import('@/views/orders/return.vue')
      },
      {
        path: 'homepage',
        name: 'homePage',
        component: () => import('@/views/homePage/homepage.vue')
      },
      {
        path: 'mySpace',
        name: 'mySpace',
        component: () => import('@/views/myspace/index.vue')
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
