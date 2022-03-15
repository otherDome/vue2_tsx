import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import NProgress from "nprogress";
import "nprogress/nprogress.css";
const login: Object = () => import("@/views/login/login");
const index: Object = () => import("@/views/index/index");

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  
  {
    path: "/",
    component: login,
    meta: {
      title: "登录",
    },
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      title: "登录",
      keepAlive:false
    }
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    meta: {
      title: "蜜橙好医",
      keepAlive:false
    }
  }
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
