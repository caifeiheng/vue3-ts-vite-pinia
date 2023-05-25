// 引入axios
import axios from 'axios'
//引入element信息
import { ElMessage } from 'element-plus'
// 使用axios创建一个axios完成其他配置
let request = axios.create({
  // 设置相同路径
  baseURL:import.meta.env.VITE_APP_BASE_URL,
  // 设置请求超时时间
  timeout:5000
})
//添加请求和响应拦截器

//请求拦截器
request.interceptors.request.use((config)=>{
  // 配置对象config的headers属性可以给服务器携带公共参数
  // 返回配置对像config
  return config
})
// 响应拦截器 两个回调一个成功，一个失败
request.interceptors.response.use((response)=>{
  return response
},(error)=>{
 let message = ''
 let status = error.response.status
 switch (status){
  case 401:
    message = 'TOKEN过期'
    break;
  case 403:
    message = '无权访问'
    break;
  case 404:
    message = '请求地址错误'
    break;
  case 500:
    message = '服务器出现问题'
    break;
  default:
    message = '网络出现问题'
    break;
 }
 ElMessage.error(message)
 Promise.reject(error)
})