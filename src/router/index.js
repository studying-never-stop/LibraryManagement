import { createRouter, createWebHashHistory } from 'vue-router'

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
        component: () => import('@/views/usersMange/usersIndex.vue')
      },
      {
        path: 'books',
        name: 'books',
        component: () => import('@/views/booksMange/index.vue')
      },
      {
        path: 'reports',
        name: 'reports',
        component: () => import('@/views/reports/index.vue')
      },
      {
        path: 'record',
        name: 'record',
        component: () => import('@/views/record/record.vue')
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
