/* eslint-disable */
import axios from 'axios'
import store from './store/index';
import router from 'vue-router'
import { sessionStorage } from 'api/assets/js/storage/index';

if (!store.state.token) {
  store.commit('SET_TOKEN', sessionStorage.getItem('token'));
}
// axios 配置
const http = axios.create({
    baseURL: '',
    // baseURL: process.env.BASE_API,
    timeout: 20000,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*'
    },
    transformRequest: [function (data, headers) {
      headers.token = store.state.token;
      if (headers['Content-type'] === 'multipart/form-data') {
        return data;
      } else {
        return JSON.stringify(data);
      }
    }]
  });
  // 请求拦截器
http.interceptors.request.use(config => {
    console.log(123);
    
    let token = store.state.token || sessionStorage.getItem('token');
    console.log(token);
    
    if (!token) {
      console.log(111);
      
      router.replace({path: '/login'});
            // this.$router.push({name: 'login', params: {id: id}})
    }
    // 开发环境下，如果请求是 post,put,patch,则打印数据体，方便调试
    if (process.env.NODE_ENV === 'development') {
      const { method } = config;
      if (method === 'post' || method === 'put' || method === 'patch') {
        // console.log(config.data);
      }
    }
  
    return config;
  }, error => {
    // loadingInstance.close();
    
    return Promise.reject(error);
  });
  // 响应拦截器
http.interceptors.response.use(res => {
    // loadingInstance.close();
    console.log(res);
    return res.data;
  }, error => {
    // loadingInstance.close();
    if (error && error.response) {
      console.log(error.response);
      console.log(21333333333);
      
      switch (error.response.status) {
        // 401 token失效
        // case 401:
        //   alert('身份信息已过期，请重新登陆', '提示', {
        //     confirmButtonText: '重新登陆',
        //     showClose: false,
        //     type: 'error',
        //     callback: action => {
        //       router.replace({
        //         path: '/login',
        //         query: {
        //           redirect: router.currentRoute.fullPath
        //         }
        //       });
        //     }
        //   });
        //   break;
  
        // 403 服务器拒绝访问
        case 403:
          router.push('/error/403');
          break;
  
        // 404 访问的资源不存在
        case 404:
          router.push('/error/404');
          break;
  
        // 500 服务器错误
        case 500:
          router.push('/error/500');
          break;
      }
  
      return Promise.reject(error);
    }
  });
  
  export default http;
  
  
  
