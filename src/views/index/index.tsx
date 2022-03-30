

/**
 * @name index
 * @author fankai16
 * @Time 2022/03/14
 * @property {string}  nakcname  用户名
 * @property {booler} AFold  展开收起页面导航
 * @function goLogin -登录提交
 * @function init -页面初始化
 * @description 首页父级
 **/
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Component, Vue, Provide } from 'vue-property-decorator';
import style from '@/assets/styles/index/index.module.scss';
import themenu from '@/views/index/Themenu/themenu'
import componentheader from '@/views/index/header/header'
@Component({
  components: {
    themenu,
    componentheader
  }
})
export default class App extends Vue {
  $filters: any;
  $Maxer: any;
  private isRouterAlive: boolean = true
  @Provide('reload')
  reload = () => {
    reload: this.reloads()
  }
  private reloads() {
    this.isRouterAlive = false
    NProgress.start()
    this.$nextTick(() => {
      this.isRouterAlive = true
      NProgress.done()
    })
  }
  protected AFold: boolean = false

  protected created() {
    // const navlist = require('@/assets/json/navlist.ts')
    const vuX = new this.$Maxer();
    this.$router.beforeEach((to: any, from: any, next) => {
      const onisname = to.name
      const routingJson = vuX.getvuex('routingJson')
      const navlist = routingJson.ThemenuList
      console.log("点击进来了", navlist)
      const isnewlist = JSON.parse(JSON.stringify(routingJson.newlist))
      let isbreadcrumb = []
      for (let index = 0; index < navlist.length; index++) {
        for (let twoInd = 0; twoInd < navlist[index].navlist.length; twoInd++) {
          if (onisname === navlist[index].navlist[twoInd].pathname) {
            if (onisname === 'home') {
              isbreadcrumb.push(
                {
                  path: '/home',
                  pathname: 'home',
                  name: "首页"
                }
              )
            } else {
              const indata = [
                {
                  path: '/home',
                  pathname: 'home',
                  name: "首页"
                }
              ]
              indata.push(
                {
                  path: navlist[index].navlist[twoInd].path,
                  pathname: navlist[index].navlist[twoInd].pathname,
                  name: navlist[index].navlist[twoInd].name
                }
              )
              isbreadcrumb = JSON.parse(JSON.stringify(indata))
            }
            const postJson = {
              Homeindex: index,
              urlID: navlist[index].navlist[twoInd].urlID,
              path: navlist[index].navlist[twoInd].path,
              pathname: navlist[index].navlist[twoInd].pathname,
              AFold: routingJson.AFold,
              tabsValuevux: routingJson.tabsValuevux,
              newlist: routingJson.newlist,
              oldList: routingJson.oldList,
              breadcrumb: isbreadcrumb,
              ThemenuList: routingJson.ThemenuList
            }
            const tabList = navlist[index].navlist[twoInd]
            const tabListJson = {
              activeicon: tabList.activeicon,
              icon: tabList.icon,
              name: tabList.name,
              path: tabList.path,
              pathname: tabList.pathname,
              urlID: tabList.urlID
            }
            if (tabListJson.pathname !== 'home') {
              isnewlist.push(tabListJson)
            }
            const newlist = this.$filters.roteraRR(isnewlist)
            postJson.newlist = newlist
            postJson.tabsValuevux = tabList.pathname
            vuX.postvuex('routingJson', postJson)
            break
          }
        }
      }
      this.$bus.$emit('indexInit')
      this.$bus.$emit('breadcrumb')
      next();
    })
  }
  protected mounted() {
    this.init()
  }
  protected init() {
    const vuX = new this.$Maxer();
    const routingJson = vuX.getvuex('routingJson')
    this.AFold = routingJson.AFold
    this.$bus.$on('AFold_bus', (e: boolean) => {
      this.AFold = e
    });
  }
  protected destroyed() {
    this.$bus.$off('event_name', 0)
    this.$bus.$off('AFold_bus', 1)
    this.$bus.$off('breadcrumb', 2)
    this.$bus.$off('indexInit', 3)
  }
  protected render() {
    return <div class={style.fatherInde}>
      <div class={[
        style.fatherInde_letf,
        this.AFold === true ?
          ""
          :
          style.fatherInde_letf_active
      ]}>
        <themenu></themenu>
      </div>
      <div class={[
        style.fatherInde_right,
        this.AFold === true ?
          ""
          :
          style.fatherInde_right_active
      ]
      }>
        <div class={style.componentheader}>
          <componentheader></componentheader>
        </div>
        <div class={style.routerView}>
          <div class={style.routerViewBOX}>
            {
              this.isRouterAlive === true
                ?
                <router-view />
                :
                ''
            }
          </div>
        </div>
      </div>
    </div>;
  }
}