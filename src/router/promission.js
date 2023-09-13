import router from './index'
import store from '@/store'

//白名单
const whiteList = ['/login']
/**
 * 路由守卫，配置允许访问的范围
 */
router.beforeEach((to, from, next) => {
    console.log('to', to)
    console.log('from', from)
    console.log('next', next)
    console.log('store', store)
    console.log('token.getters', store.getters)
    console.log('token', store.getters.token)
    if (
        store.getters.token
    ){
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
