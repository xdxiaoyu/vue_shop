import axios from 'axios'
import Message from 'element-ui'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 请求拦截器
axios.interceptors.request.use(config => {
  console.log('config:', config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 必须在最后return config
  return config
})
// 响应拦截器
axios.interceptors.response.use(response => {
  console.log('response', response)
  if (response.status === 200) {
    return response
  } else {
    Message.error(response.data.meta.msg)
  }
})
export default axios
