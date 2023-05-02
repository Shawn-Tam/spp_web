import axios from 'axios';
import { Message } from "element-ui";
// 123.57.20.104:8888
const service = axios.create({
  baseURL: 'http://123.57.20.104:8888',
  timeout: 9000
})

// request拦截器
service.interceptors.request.use( 
  (config) => {
    if (getToken()) {
      config.headers["x-token"] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
      console.log("axios Cookies getToken Success", getToken())
    }else{
      console.log("axios Cookies getToken Err",getToken())
    }
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  (error) => {
    console.log(error);
    // Promise.reject(error);
  }
)

service.interceptors.response.use(
  (res => {
    if (typeof res.data !== 'object') {
     Message.error('服务端异常！');
      // return Promise.reject(res);
    }
    if (res.data.resultCode != 200) {
      if (res.data.message) Toast.fail(res.data.message);
      if (res.data.resultCode == 416) {
        window.vRouter.push({
          path: '/login'
        });
      }
    }
    return res.data;
  }),
  (error) => {
  }
)

export default service

