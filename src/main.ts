
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import EventBus from 'vue-bus-ts';
import "vue-tsx-support/enable-check";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import OnlyMessage from "./utils/elementMsg/onlyMsgbox"
import "./registerServiceWorker";
import { install } from '@icon-park/vue/es/all';
install(Vue, 'icon');
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$OnlyMessage = OnlyMessage

if (process.env.NODE_ENV !== "production") {
  console.log(
    `%c 当前环境 %c`+ process.env.NODE_ENV+`%c`,
    'background:#35495e ; padding: 4px; border-radius: 3px 0 0 3px;  color: #fff',
    'background:#41b883 ; padding: 4px; border-radius: 0 3px 3px 0;  color: #fff',
    'background:transparent'
  )
  console.log(
    `%c 当前环境 %c`+ process.env.VUE_APP_BASE_API+`%c`,
    'background:#35495e ; padding: 4px; border-radius: 3px 0 0 3px;  color: #fff',
    'background:#41b883 ; padding: 4px; border-radius: 0 3px 3px 0;  color: #fff',
    'background:transparent'
  )
  Vue.config.errorHandler = function(err: any, vm: any, info: any) {
    console.error(`组件${vm.$vnode.tag}发生错误：${err.message},${info}`);
  };
}
const bus = new EventBus.Bus();
router.beforeEach((to: any, from: any, next) => {
  const title =
    to.meta.title == undefined
      ? "德开医药health系统"
      : "德开医药health系统-" + to.meta.title;
  window.document.title = title;
  if (to.meta.requireAuth) {
    // let token = Cookies.get('access_token');
    // let anonymous = Cookies.get('user_name');
    // if (token) {
    //         next({
    //             path: '/login',
    //             query: {
    //                 redirect: to.fullPath
    //             }
    //         })
    // }
  }
  next();
});

new Vue({
  bus: bus,
  router:router,
  store:store,
  render: h => h(App)
}).$mount('#app')
