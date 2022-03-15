import axios from "axios";
import qs from "qs";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
const service = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "" : "/online",
  timeout: 60000,
});
service.interceptors.request.use(
  (config: any) => {
    NProgress.start()
    const header: any = config.headers;
    const dataType = header.dataType ? header.dataType : "";
    if (process.env.NODE_ENV === "production") {
      config.headers["Authorization"] = "Bearer ";
    } else {
      config.headers["Authorization"] = "Bearer ";
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
    console.log("configconfig", config)
    return config;
  },
  (error:any) => {
    console.log(error);
    Promise.reject(error);
  }
);
service.interceptors.response.use(
  (response:any) => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data;
    return res;
  },
  (error:any) => {
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
      return errJson;
    }
    else if (errList.status === 400) {
    } else {
      return "err";
    }
  }
);
export default service;
