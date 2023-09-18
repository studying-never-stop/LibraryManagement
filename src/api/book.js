import request from './request'

export const getBook = (data) => {
  return request({
    url: '/book/getBook',
    method: 'post',
    /**
     * 注意post的时候用'data'传递的数值会以json的形式在body中传输
     * 而params 一般用于get方法，将内容直接写在url中
     */
    data
  })
}

export const addBook = (data) => {
  return request({
    url: '/book/addBook',
    method: 'post',
    data
  })
}

export const editBook = (data) => {
  return request({
    url: `/book/editBook/${data['id']}`,
    method: 'put',
    data
  })
}

export const lendBook = (data) => {
    return request({
      url: `/book/lendBook/${data['id']}`,
      method: 'put',
      data
    })
}

export const returnBook = (data) => {
    return request({
      url: `/book/returnBook/${data['id']}`,
      method: 'put',
      data
    })
}

export const deleteBook = (id) => {
  return request({
    url: `/book/delBook/${id}`,
    method: 'delete',
  })
}