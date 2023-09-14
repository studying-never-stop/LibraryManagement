import request from './request'

export const login = (data) => {
  console.log(data)
  return request({
    url: '/auth/login',
    method: 'POST',
    data
  })
}