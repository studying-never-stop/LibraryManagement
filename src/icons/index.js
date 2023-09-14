//自用图标的js配置
import SvgIcon from '@/components/Svgicon'
 
const svgRequired = require.context('./svg',false,/\.svg$/)
svgRequired.keys().forEach((item) => svgRequired(item));

export default app => {
    app.component('svg-icon',SvgIcon)
}