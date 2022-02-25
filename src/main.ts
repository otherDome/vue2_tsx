import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import EventBus from 'vue-bus-ts';
import "vue-tsx-support/enable-check";
Vue.config.productionTip = false
Vue.use(EventBus);
const bus = new EventBus.Bus();
Vue.use(ElementUI);
new Vue({
  bus: bus,
  router:router,
  store:store,
  render: h => h(App)
}).$mount('#app')
