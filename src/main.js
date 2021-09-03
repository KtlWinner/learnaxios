import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import {request} from "./network/request";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
//   // url: 'http://localhost:8080/wowoblog/users/login',
//   // method: 'post',
//   // params: {
//   //   email: '2627774258@qq.com',
//   //   password: '524524'
//   // }
// }).then(res => {
//   console.log(res)
// })


// const intence = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
// intence({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

//第一种写法
// request({
//   url: '/home/multidata'
// },res => {
//   console.log(res)
//   console.log('请求成功')
// },err => {
//   console.log(err)
//   console.log('请求失败')
// })

//第二种写法
// request({
//   url: '/home/multidata',
//   success(res) {
//     console.log(res)
//   },
//   failure(err) {
//     console.log(err)
//   }
// })

//第三种写法
// request({
//   url: '/home/multidata',
// }).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

//第四种写法
request({
  url: '/home/multidata',
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})