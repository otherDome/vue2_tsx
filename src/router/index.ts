/**
 * @name index
 * @author fankai16
 * @Time 2022/03/22
 * @property {Object}  login  登录页面
 * @property {Object}  index 首页夫级别页面
 * ------------------------------首页(home)----------------------------------
 * @property {Object}  home  首页
 * ------------------------------首页结束-------------------------------------
 * ------------------------------用户管理(Theuser)----------------------------
 * @property {Object}  Users  用户分配
 * @property {Object}  kehuzhuizong  客户追踪
 * @property {Object}  userservice   用户服务
 * @property {Object}  TodaysTask    今日任务
 * @property {Object}  Userspay    用户付费
 * ----------------------------用户管理结束-----------------------------------
 * ---------------------------数据报表(DataReport)----------------------------
 * @property {Object}  results    业绩汇总
 * @property {Object}  goodsData  商品报表
 * @property {Object}  Afterpurchase  复购报表
 * @property {Object}  wxData  微信报表
 * @property {Object}  followup  随访记录
 * @property {Object}  Thepublic 公众号报表
 * ---------------------------数据报表结束(DataReport)-------------------------
 * -----------------------------商品维护(goodswxs)----------------------------
 * @property {Object}  goodswhs 商品维护
 * @property {Object}  rebatewhs  返利维护
 * -----------------------------商品维护结束(goodswxs)-------------------------
 * ------------------------------权限管理(permissions)-------------------------
 * @property {Object}  role 角色管理
 * @property {Object}  account 账户管理
 * @property {Object}  Themenu 菜单管理
 * @property {Object}  department  部门管理
 * @property {Object}  wxpeizhi    微信配置
 * @property {Object}  Theblacklist  黑名单管理
 * ------------------------------权限管理结束(permissions)---------------------
 * @description 路由文件
 **/

import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import NProgress from "nprogress";
import "nprogress/nprogress.css";
const login: Object = () => import("@/views/login/login");
const index: Object = () => import("@/views/index/index");
//------------------------------首页(home)----------------------------------
const home: Object = () => import("@/views/home/home");
//------------------------------首页结束-------------------------------------
//------------------------------用户管理(Theuser)----------------------------
const Users: Object = () => import("@/views/Theuser/Users");
const kehuzhuizong: Object = () => import("@/views/Theuser/kehuzhuizong");
const userservice: Object = () => import("@/views/Theuser/userservice");
const TodaysTask: Object = () => import("@/views/Theuser/TodaysTask");
const Userspay: Object = () => import("@/views/Theuser/Userspay");
//----------------------------用户管理结束-----------------------------------
//---------------------------数据报表(DataReport)----------------------------
const results: Object = () => import("@/views/DataReport/results");
const goodsData: Object = () => import("@/views/DataReport/goodsData");
const Afterpurchase: Object = () => import("@/views/DataReport/Afterpurchase");
const wxData: Object = () => import("@/views/DataReport/wxData");
const followup: Object = () => import("@/views/DataReport/followup");
const Thepublic: Object = () => import("@/views/DataReport/Thepublic");
//---------------------------数据报表结束(DataReport)-------------------------
//-----------------------------商品维护(DataReport)---------------------------
const goodswhs: Object = () => import("@/views/goodswxs/goodswhs");
const rebatewhs: Object = () => import("@/views/goodswxs/rebatewhs");
//-----------------------------商品维护结束(DataReport)-----------------------
//------------------------------权限管理(permissions)-------------------------
const role: Object = () => import("@/views/permissions/role");
const account: Object = () => import("@/views/permissions/account");
const Themenu: Object = () => import("@/views/permissions/Themenu");
const department: Object = () => import("@/views/permissions/department");
const wxpeizhi: Object = () => import("@/views/permissions/wxpeizhi");
const Theblacklist: Object = () => import("@/views/permissions/Theblacklist");
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
      keepAlive: false,
      permissions:false
    }
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    meta: {
      title: "蜜橙好医",
      keepAlive: false,
      permissions:false
    },
    children: [
      {
        path: "/home",
        name: "home",
        component: home,
        meta: {
          title: "首页",
          keepAlive: false,
          permissions:false
        }
      },
      {
        path: "/Users",
        name: "Users",
        component: Users,
        meta: {
          title: "用户分配",
          keepAlive: false,
          permissions:false
        }
      },
      {
        path: "/Thecustomer",
        name: "Thecustomer",
        component: kehuzhuizong,
        meta: {
          title: "客户追踪",
          keepAlive: false,
          permissions:false
        }
      },
      {
        path: "/userservice",
        name: "userservice",
        component: userservice,
        meta: {
          title: "用户服务",
          keepAlive: false,
          permissions:false
        }
      },
      {
        path: "/TodaysTask",
        name: "TodaysTask",
        component: TodaysTask,
        meta: {
          title: "今日任务",
          keepAlive: false,
          permissions:false
        }
      },
      {
        path: "/Userspay",
        name: "Userspay",
        component: Userspay,
        meta: {
          title: "用户付费",
          keepAlive: false,
          permissions:false
        }
      },
      {
        path: "/results",
        name: "results",
        component: results,
        meta: {
          title: "业绩汇总",
          keepAlive: false,
          permissions:false
        }
      },
      {
        path: "/goodsData",
        name: "goodsData",
        component: goodsData,
        meta: {
          title: "商品报表",
          keepAlive: false,
          permissions:false
        }
      },
      {
        path: "/Afterpurchase",
        name: "Afterpurchase",
        component: Afterpurchase,
        meta: {
          title: "复购报表",
          keepAlive: false,
          permissions:false
        }
      },
      {
        path: "/wxData",
        name: "wxData",
        component: wxData,
        meta: {
          title: "微信报表",
          keepAlive: false,
          permissions:false
        }
      },
      {
        path: "/followup",
        name: "followup",
        component: followup,
        meta: {
          title: "随访记录",
          keepAlive: false,
          permissions:false
        }
      },
      {
        path: "/Thepublic",
        name: "Thepublic",
        component: Thepublic,
        meta: {
          title: "公众号报表",
          keepAlive: false,
          permissions:false
        }
      },
      {
        path: "/goodswhs",
        name: "goodswhs",
        component: goodswhs,
        meta: {
          title: "商品维护",
          keepAlive: false,
          permissions:false
        }
      },
      {
        path: "/rebatewhs",
        name: "rebatewhs",
        component: rebatewhs,
        meta: {
          title: "返利维护",
          keepAlive: false,
          permissions:false
        }
      },
      {
        path: "/role",
        name: "role",
        component: role,
        meta: {
          title: "角色管理",
          keepAlive: false,
          permissions:false
        }
      },
      {
        path: "/account",
        name: "account",
        component: account,
        meta: {
          title: "账户管理",
          keepAlive: false,
          permissions:false
        }
      },
      {
        path: "/Themenu",
        name: "Themenu",
        component: Themenu,
        meta: {
          title: "菜单管理",
          keepAlive: false,
          permissions:false
        }
      },
      {
        path: "/department",
        name: "department",
        component: department,
        meta: {
          title: "部门管理",
          keepAlive: false,
          permissions:false
        }
      },
      {
        path: "/wxpeizhi",
        name: "wxpeizhi",
        component: wxpeizhi,
        meta: {
          title: "微信配置",
          keepAlive: false,
          permissions:false
        }
      },
      {
        path: "/Theblacklist",
        name: "Theblacklist",
        component: Theblacklist,
        meta: {
          title: "黑名单",
          keepAlive: false,
          permissions:false
        }
      }
    ]
  }
]
// 解决重复点击路由报错的BUG  results
const originalPush :any= VueRouter.prototype.push;
VueRouter.prototype.push = function push(location:any) {
  return originalPush.call(this, location).catch((err:any) => err);
};

//解决重复点击路由报错的BUG  results
const originalreplace:any = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location:any) {
  return originalreplace.call(this, location).catch((err:any) => err);
};

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to:any, from, next) => {
  NProgress.start()
  const title =
  to.meta.title == undefined
    ? "XXX医药health系统"
    : "XXX医药health系统-" + to.meta.title;
  window.document.title = title;
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
