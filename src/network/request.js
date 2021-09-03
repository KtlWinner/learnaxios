import axios from "axios";

//第一种写法
// export function request(config , success , failure){
//     const intence = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })
//
//     intence(config)
//         .then(res => {
//             success(res)
//         })
//         .catch(err => {
//             failure(err)
//         })
// }

//第二种写法
// export function request(config){
//         const intence = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })
//     intence(config.url)
//         .then(res => {
//             config.success(res)
//         })
//         .catch(err => {
//             config.failure(err)
//         })
// }

//第三种写法
// export function request(config){
//     return new Promise((resolve,reject) => {
//         const intence = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })
//         intence(config)
//             .then(res => {
//             resolve(res)
//         })
//         .catch(err => {
//            reject(err)
//         })
//     })
// }

//第四种写法
export function request(config){
    const intence = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
//拦截器，请求拦截，参数有两个，第一个是请求成功的，第二个是请求失败的
    intence.interceptors.request.use(config => {
        console.log('请求拦截')
        return config
    },err => {
        console.log(err)
    })
//拦截器，响应拦截，参数有两个，第一个是请求成功的，第二个是请求失败的
    intence.interceptors.response.use(res => {
        console.log('响应拦截')
        return res.data
    },err => {
        console.log(err)
    })

    return intence(config)
}