/**
 * @name index
 * @author fankai16
 * @Time 2022/03/21
 * @property {json,number}  Homeindex  导航索引
 * @property {json,string}  urlID  导航字符串
 * @property {json,string}  path    路由path
 * @property {json,string}  pathname    路由pathname
 * @property {json,arr}  newlist     加入进去的导航数组
 * @property {json,arr}  oldList     旧的进去的导航数组
 * @property {json,arr}  breadcrumb  面包屑数组
 * @property {json,booler}  AFold    展开关闭菜单导航
 * @property {json,string}  tabsValuevux  tab的储存器
 * @property {json,arr}  ThemenuList  导航数组接口获取
 * ------------information-----------------------
 * @property {json,json}  information  用户凭证
 * @property {arr}  breadcrumbList 会员数据列表
 * @function init -页面初始化
 * @description 导航栏
 **/
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    routingJson: {
      Homeindex:0,
      urlID: "1-1",
      path: '',
      pathname: '',
      AFold: true,
      tabsValuevux: 'home',
      newlist: [
        {
          path: '/home',
          pathname: 'home',
          name: "首页",
          activeicon: require("@/assets/img/nav/index/home_active.svg"),
          icon:require("@/assets/img/nav/index/home.svg")
        }
      ],
      oldList: [],
      breadcrumb: [
        {
        path: '/home',
        pathname: 'home',
        name: "首页"
        }
      ],
      ThemenuList:[]
    },
    information: {
      tokenJSON:{}
    }
  },
  mutations: {
    $changeStore(state: any, payload: any) {
      // 判断是否为多层级调用
      const nameArr = payload.name.split(".");
      const len = nameArr.length;
      if (len >= 2) {
        let obj = state[nameArr[0]];
        for (let i = 1; i < len - 1; i++) {
          obj = obj[nameArr[i]];
        }
        obj[nameArr[len - 1]] = payload.value;
      } else {
        state[payload.name] = payload.value;
      }
    },
    $clearVuex(store: any) {
      store["routingJson"] = {
        Homeindex:0,
        urlID: "",
        path: '',
        pathname: '',
        AFold: true,
        tabsValuevux:'home',
        newlist: [
          {
            path: '/home',
            pathname: 'home',
            name: "首页",
            activeicon: require("@/assets/img/nav/index/home_active.svg"),
            icon:require("@/assets/img/nav/index/home.svg")
          }
        ],
        oldList: [],
        breadcrumb: [
          {
          path: '/home',
          pathname: 'home',
          name: "首页"
          }
        ],
        ThemenuList:[]
      };
      store["information"] = {
        tokenJSON:{}
      }
      console.log("数据缓存清空", store);
    },
  },
  actions: {
  },
  modules: {
  }
})
