import router from './index'
import store from '@/store'

//白名单
const whiteList = ['/login']
/**
 * 路由守卫，配置允许访问的范围
 */
router.beforeEach((to, from, next) => {
    if (store.getters.token){
        console.log(store)
        if (to.path === '/login'){
            next('/')
        } else {
            next()
        }
    } else {
        if(whiteList.includes(to.path)){
            next()
        } else {
            next('/login')
        }
    }
})
