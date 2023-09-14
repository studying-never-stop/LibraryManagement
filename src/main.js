import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import'@/router/promission'
import SvgIcon from '@/icons'
import * as Elicon from '@element-plus/icons-vue'

const app = createApp(App)
for ( const iconName in Elicon){
    //注册组件
    app.component(iconName, Elicon[iconName])
}
SvgIcon(app)
app.use(store).use(router).mount('#app')
