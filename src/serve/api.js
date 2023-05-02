export const updateBook = (query) => {
    return request({
        url:'/base/login',
        method:'post',
        data:query
    })
}