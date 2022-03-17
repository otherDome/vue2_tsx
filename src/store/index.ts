import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    routingJson: {
      urlID: "",
      path: '',
      pathname: '',
      newlist: [],
      oldList:[]
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
        urlID: "",
        path: '',
        pathname: '',
        newlist: [],
        oldList:[]
      };
      console.log("数据缓存清空", store);
    },
  },
  actions: {
  },
  modules: {
  }
})
