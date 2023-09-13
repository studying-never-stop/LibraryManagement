import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
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
