// Set config defaults when creating the instance
//自定义实例默认值
import axios from "axios";

//所有通过这个实例发出的请求都会自动加上该前缀。
const myAxios = axios.create({
    baseURL: 'http://localhost:8080/api'
});

/* 让 myAxios 这个 axios 实例在跨域请求时携带凭证信息。 */
myAxios.defaults.withCredentials = true;

//拦截器
// 添加请求拦截器
myAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log("请求发送了",config)
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
myAxios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log("请求收到了",response)
    /*{
      data: {},      // 服务器返回的数据
      status: 200,    // HTTP状态码
      statusText: 'OK',
      headers: {},    // 响应头
      config: {}      // 请求配置
    }*/
    /* 只返回数据 */
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default myAxios;