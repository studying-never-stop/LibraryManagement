import request from './request'

    /**
     * 注意post的时候用'data'传递的数值会以json的形式在body中传输
     * 而params 一般用于get方法，将内容直接写在url中
     */
export const menuList = () => {
  return request({
    url: './menu/menu'
  })
}
