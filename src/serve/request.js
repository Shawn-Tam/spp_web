import axios from 'axios'
import { Message } from 'element-ui'

// Helper function to get the token from somewhere (e.g. localStorage, cookies)
function getToken() {
  // Replace this line with the actual implementation to get the token
  return localStorage.getItem('token')
}

const service = axios.create({
  baseURL: 'http://123.57.20.104:8888',
  timeout: 9000
})

// Request interceptors
service.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers['x-token'] = token
      console.log('axios Cookies getToken Success', token)
    } else {
      console.log('axios Cookies getToken Err', token)
    }
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  (error) => {
    console.log(error)
    Promise.reject(error)
  }
)

// Response interceptors
service.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    Message.error('请求失败，请稍后再试')
    return Promise.reject(error)
  }
)

export default service
