/**
 * @name login
 * @author fankai16
 * @Time 2022/03/11
 * @namespace   Message
 * @function goLogin -登录接口
 * @description 登录接口
 **/
import request from "@/utils/https/request";
import apiconfig from "@/config/apiconfig"
const NODE_ENV= process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'online'
export function goLogin(options:any){
  return request({
        url: "/api/login",
        method: 'post',
        baseURL: NODE_ENV ? apiconfig.healthapi : '/online',
        headers: options.headers,
        data: options.data
    })
}

export function gomenuAPI(){
  return request({
        url: "/api/menu",
        method: 'get',
        baseURL: NODE_ENV ? apiconfig.healthapi : '/online',
    })
}