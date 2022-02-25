/**
 * @name App.tsx
 * @author fankai16
 * @Time 2022/02/25
 * @description 项目入口页面
 **/
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class App extends Vue {
  render() {
    const route = this.$route
    const meta: any = route.meta
    console.log("keepAlive", meta)
    return (
      <div id="app">
        {
          meta.keepAlive === true ? <keep-alive><router-view /></keep-alive> : <router-view />
        }
      </div>
    )
  }
}