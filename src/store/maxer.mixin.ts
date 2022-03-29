import Vue from 'vue'
import { mapState } from 'vuex'
import store from "./index";
// 将定义的state变量key全部加载到全局变量中
const $mStoreKey = store.state ? Object.keys(store.state) : [];
export class Maxer {
  postvuex = (name: string, value: any): void => {
    store.commit("$changeStore", {
      name,
      value,
    });
  };
  getvuex = (name: any) => {
    const isData = store.state;
    const datalist = {
      routingJson: isData.routingJson,
      information:isData.information
    } as any;
    const resultsOf = datalist[name] ? datalist[name] : "";
    return resultsOf;
  };
  clearvuex = () => {
    store.commit("$clearVuex", store);
  };
}
const installMaxerStore=Vue.mixin({
  computed: {
    // 将vuex的state中的所有变量，解构到全局混入的mixin中
    ...mapState($mStoreKey),
  },
});

export default installMaxerStore