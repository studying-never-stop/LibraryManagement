import request from './request'

export const addRecord = (data) => {
  return request({
    url: '/switch/addRecord',
    method: 'post',
    data
  })
}


export const getRecord = (data) => {
    return request({
      url: '/switch/getRecord',
      method: 'post',
      data
    })
  }

export const getData = (data) => {
  return request({
    url: '/switch/getData',
    method: 'post',
    data
  })
}