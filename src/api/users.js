import request from './request'

    /**
     * 注意post的时候用'data'传递的数值会以json的形式在body中传输
     * 而params 一般用于get方法，将内容直接写在url中
     */
export const getUsers = (data) => {
  return request({
    url: '/user/getUser',
    method: 'POST',
    data
  })
}

export const addUser = (data) => {
  return request({
    url: '/auth/regist',
    method: 'post',
    data
  })
}

export const editUser = (data) => {
  return request({
    url: `/user/editUser/${data['id']}`,
    method: 'put',
    data
  })
}

export const deleteUser = (id) => {
  return request({
    url: `/user/delUser/${id}`,
    method: 'delete',
  })
}

export const getUserData = (data) => {
  return request({
    url: '/user/getUserData',
    method: 'POST',
    data
  })
}