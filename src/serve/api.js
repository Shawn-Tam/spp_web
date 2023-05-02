import request from "./request"
export const userLogin = (query) => {
    return request({
        url:'/base/login',
        method:'post',
        data:query
    })
}

export const captcha = () => {
    return request({
        url:'/base/captcha',
        method:'post'
    })
}

export const getExamTaskList = (query) => {
    return request({
        url:'/examTask/getExamTaskList',
        method:'get',
        params:query
    })
}

export const getExamUserTaskList = (query) => {
    return request({
        url:'/examTask/getExamUserTaskList',
        method:'get',
        params:query
    })
}

export const submitExamTask = (query) => {
    return request({
        url:'/examTask/submitExamTask',
        method:'post',
        data:query
    })
}

export const queryPracticeById = (query) => {
    return request({
        url:'/examPractice/queryPracticeById',
        method:'get',
        params:query
    })
}