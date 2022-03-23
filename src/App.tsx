/**
 * @name App.tsx
 * @author fankai16
 * @Time 2022/02/25
 * @description 项目入口页面
 **/
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Vue, Component, Provide } from 'vue-property-decorator';
import style from '@/app.module.scss';

@Component
export default class App extends Vue {
  private mounted() {
    console.log(
      `%c 德开health %c 基于Vue Admin Plus构建 %c`,
      'background:#030307 ; padding: 4px; border-radius: 3px 0 0 3px;  color: #FADFA3',
      'background:#FADFA3 ; padding: 4px; border-radius: 0 3px 3px 0;  color: #030307',
      'background:transparent'
    )
  }
  render() {
    const route = this.$route
    const meta: any = route.meta
    return (
      <div id="app" class={style.app}>
        {
          meta.keepAlive === true ?
            <keep-alive>
              <router-view />
            </keep-alive>
            :
            <router-view />
        }
      </div>
    )
  }
}