import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/homePage/homepage.vue'

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: homePage
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/LoginIndex.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
