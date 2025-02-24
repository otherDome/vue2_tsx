import axios from "axios";
import qs from "qs";
import NProgress from "nprogress";
import OnlyMessage from "../elementMsg/onlyMsgbox"
import "nprogress/nprogress.css";
import { Maxer } from "@/store/maxer.mixin";
const service = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "" : "/online",
  timeout: 60000,
});
service.interceptors.request.use(
  (config: any) => {
    NProgress.start()
    const header: any = config.headers;
    const dataType = header.dataType ? header.dataType : "";
    const isurl = config.url
    if (isurl === '/api/login') {
      console.log("这是登录接口无操作",)
    } else {
      const vuX = new Maxer();
      const information= vuX.getvuex('information')
      const token=information.token
      if (process.env.NODE_ENV === "production") {
        config.headers["Authorization"] = token;
      } else {
        config.headers["Authorization"] = token;
      }
    }

    if (config.method === "post") {
      if (dataType === "img") {
        config.headers["Content-Type"] = "multipart/form-data";
      } else {
        config.headers["Content-Type"] =
          dataType === "json"
            ? "application/json"
            : "application/x-www-form-urlencoded";
      }
      config.data = config.data || {};
      if (dataType === "json" || dataType === "img") {
        console.warn("不需要要QS序列化post方法");
      } else {
        config.data = qs.stringify(config.data);
      }
    } else if (config.method === "put") {
      if (dataType === "img") {
        config.headers["Content-Type"] = "multipart/form-data";
      } else {
        config.headers["Content-Type"] =
          dataType === "json"
            ? "application/json"
            : "application/x-www-form-urlencoded";
      }
      config.data = config.data || {};
      if (dataType === "json" || dataType === "img") {
        console.warn("不需要要QS序列化put方法");
      } else {
        config.data = qs.stringify(config.data);
      }
    }
    return config;
  },
  (error: any) => {
    console.log(error);
    Promise.reject(error);
  }
);
service.interceptors.response.use(
  (response: any) => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data;
    NProgress.done()
    return res;
  },
  (error: any) => {
    const errList = error.response;
    NProgress.done()
    if (errList.status === 403) {
      const errJson = {
        error: errList.data.error,
        status: 403,
      };
      return errJson;
    } else if (errList.status === 401) {
    } else if (errList.status === 500) {
      const errJson = {
        error: errList.data.error,
        status: 500,
      };
      OnlyMessage.error(errJson)
    }
    else if (errList.status === 400) {
    } else {
      return "err";
    }
  }
);
export default service;
