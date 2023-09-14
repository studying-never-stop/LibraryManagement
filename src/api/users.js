import request from './request'

export const getUsers = (params) => {
  console.log(params)
  return request({
    url: './user/getUser',
    method: 'POST',
    params
  })
}


// export const changeUserState = (uid,type) => {
//   return request({
//     url: `./api/users/${uid}/state/${type}`,
//     method:'put'
//   })
// }

export const addUser = (data) => {
  return request({
    url: './api/auth/regist',
    method: 'post',
    data
  })
}

export const editUser = (data) => {
  return request({
    url: `./api/users/${data['ID']}`,
    method: 'put',
    data
  })
}

export const deleteUser = (id) => {
  console.log(id)
  return request({
    url: `./api/users/${id}`,
    method: 'delete'
  })
}