
/**
 * @name themenu
 * @author fankai16
 * @Time 2022/03/15
 * @property {arr}  navlist  导航数据列表
 * @property {string}  addUrl  选中一级菜单ID
 * @property {string} addUrlName  选中一级菜单名称
 * @property {arr}  ThesecondaryList  选中的二位数组
 * @property {string}  TheselectedUrl  选中菜单IID
 * @property {any}  newTimeull  选择的时间戳
 * @property {boolean} collapseTransition  导航菜单的折叠动画
 * @function goLogin -登录提交
 * @function ongoroter  点击导航获取IID
 * @function ongoroter  点击导航获取IID
 * @function breadcrumb  异步获取导航标签数组列
 * @description 导航栏   key={this.newTimeull}       this.newTimeull = new Date().getTime()
 **/
import { Component, Vue } from 'vue-property-decorator';
import style from '@/assets/styles/index/Themenu/themenu.module.scss';
//const navlist = require('@/assets/json/navlist.ts')
import { modelnavlist } from '@/assets/model/navlist'

@Component
export default class App extends Vue {
  private navlist: any = []
  private addUrl: string = ''
  private addUrlName: string = ''
  private ThesecondaryList: any = []
  private TheselectedUrl: string = ''
  private newTimeull: any = ''
  private collapseTransition: boolean = false
  $Maxer: any;
  private created() {
    const vuX = new this.$Maxer();
    const routingJson = vuX.getvuex('routingJson')
    this.navlist = routingJson.ThemenuList
  }
  private mounted() {
    this.init()
    this.$bus.$on('indexInit', () => {
      this.init()
    });
  }
  private init() {
    const vuX = new this.$Maxer();
    const routingJson = vuX.getvuex('routingJson')
    this.TheselectedUrl = routingJson.urlID
    const Homeindex = routingJson.Homeindex
    if (this.navlist.length > 0) {
      this.addUrl = this.navlist[Homeindex].pathname
      this.addUrlName = this.navlist[Homeindex].name
      this.ThesecondaryList = this.navlist[Homeindex].navlist
      this.TheselectedUrl = routingJson.urlID
    }
  }
  private async onPagesRoter(item: any, index: number) {
    this.ThesecondaryList = []
    const vuX = new this.$Maxer();
    const routingJson = vuX.getvuex('routingJson')
    console.log('aaaaaaa', routingJson)
    this.addUrl = item.pathname
    this.addUrlName = item.name
    this.ThesecondaryList = JSON.parse(JSON.stringify(item.navlist))
    routingJson.Homeindex = index
    if (item.navlist.length > 0) {
      routingJson.urlID = item.navlist[0].urlID
      this.TheselectedUrl = item.navlist[0].urlID
    }
    const breadcrumbList = await this.breadcrumb(item, 'onPagesRoter')
    routingJson.breadcrumb = JSON.parse(JSON.stringify(breadcrumbList))
    vuX.postvuex('routingJson', routingJson)
    this.$bus.$emit('AFold_bus', true)
    this.$router.push({
      name: item.pathname
    })
  }
  private async ongoroter(item: any) {
    const vuX = new this.$Maxer();
    const routingJson = vuX.getvuex('routingJson')
    const newlist = routingJson.newlist
    if (newlist.length > 0) {
      for (let index = 0; index < newlist.length; index++) {
        if (newlist[index].urlID === item.urlID) {
          this.$router.push({
            name: item.pathname
          })
          return
        } else {
          routingJson.path = item.path
          routingJson.pathname = item.pathname
          routingJson.urlID = item.urlID
          routingJson.tabsValuevux = item.pathname
          this.TheselectedUrl = item.urlID
          const breadcrumbList = await this.breadcrumb(item, 'ongoroter')
          routingJson.breadcrumb = breadcrumbList
          vuX.postvuex('routingJson', routingJson)
        }
      }
    } else {
      routingJson.path = item.path
      routingJson.pathname = item.pathname
      routingJson.urlID = item.urlID
      routingJson.tabsValuevux = item.pathname
      this.TheselectedUrl = item.urlID
      const breadcrumbList = await this.breadcrumb(item, 'ongoroter')
      routingJson.breadcrumb = breadcrumbList
      vuX.postvuex('routingJson', routingJson)
    }
    //this.$bus.$emit('breadcrumb')
    this.$router.push({
      name: item.pathname
    })
  }
  private breadcrumb(item: any, type: string) {
    return new Promise((resolve) => {
      let breadcrumb = [
        {
          path: '/home',
          pathname: 'home',
          name: "首页"
        }
      ]
      if (type === 'ongoroter') {
        if (item.navlist.length === 0) {
          if (item.name !== '首页') {
            breadcrumb.push(
              {
                path: item.path,
                pathname: item.pathname,
                name: item.name
              }
            )
          }
        } else {
          console.log('二级以上菜单待处理')
        }
      } else {
        if (item.name !== '首页') {
          if (item.navlist.length > 0) {
            breadcrumb.push(
              {
                path: item.navlist[0].path,
                pathname: item.navlist[0].pathname,
                name: item.navlist[0].name
              }
            )
          }
        }
      }
      resolve(breadcrumb);
    });
  }
  protected render() {
    return <div class={style.themenu}>
      <div class={style.themenu_box}>
        <div class={style.themenu_boxleft}>
          <div class={style.themenu_boxleft_top}>
            <img src={require('@/assets/img/nav/michy.png')} title='加载中...' />
          </div>
          <div class={style.themenu_boxleft_footer}>
            <ul>
              {this.navlist.map((pro: modelnavlist, index: number) => {
                return (
                  <li
                    class={this.addUrl === pro.pathname ? style.isLiactive : "3"}
                    onClick={this.onPagesRoter.bind(this, pro, index)}
                  >
                    <img src={pro.icon} title='加载中...' />
                    <p>{pro.name}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div class={style.themenu_boxright}>
          <div class={style.themenu_boxright_title}>
            <h1>health系统</h1>
            <h2>{this.addUrlName}</h2>
          </div>
          <div>
            <el-menu
              props={{
                defaultOpeneds: [],
                defaultActive: this.TheselectedUrl,
                collapseTransition: this.collapseTransition
              }}
              {
              ...{
                on: {
                  'open': (key: any, keyPath: any) => {
                    console.warn('展开PC端导航', key, keyPath)
                  },
                  'close': (key: any, keyPath: any) => {
                    console.warn('收起PC端导航', key, keyPath)
                  },
                }
              }
              }
            >
              {this.ThesecondaryList.map((pro: modelnavlist) => {
                if (pro.navlist.length > 0) {
                  const htmlList: any = []
                  /**
                     * @name menu
                     * @author fankai16
                     * @property {arr}  htmlList  二级数据
                     * @description 导航栏二级
                  **/
                  pro.navlist.map((item: modelnavlist) => {
                    const htmlListsan: any = []
                    /**
                      * @name menu
                      * @author fankai16
                      * @property {arr}  htmlListsan  二级数据
                      * @description 导航栏三级
                    **/
                    if (item.navlist.length > 0) {
                      item.navlist.map((threeitem: modelnavlist) => {
                        htmlListsan.push(
                          <el-menu-item
                            class={
                              pro.urlID === this.TheselectedUrl ?
                                style.isASctive : ''
                            } index={threeitem.urlID}>{threeitem.name}</el-menu-item>
                        )
                      })
                      htmlList.push(
                        <el-menu-item-group>
                          <template slot="title">{item.name}</template>
                          {htmlListsan}
                        </el-menu-item-group>
                      )
                    } else {
                      htmlList.push(
                        <el-menu-item index={item.urlID}
                          class={
                            pro.urlID === this.TheselectedUrl ?
                              style.isASctive : ''
                          }>
                          <i class="el-icon-menu"></i>
                          <span slot="title">{item.name}</span>
                        </el-menu-item>
                      )
                    }
                  })
                  return (
                    <el-submenu index={pro.urlID} >
                      <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{pro.name}</span>
                      </template>
                      {htmlList}
                    </el-submenu>
                  )
                } else {
                  return (
                    <el-menu-item
                      index={pro.urlID}
                      onClick={this.ongoroter.bind(this, pro)}
                      class={
                        pro.urlID === this.TheselectedUrl ?
                          style.isASctive : ''
                      }
                    >
                      <img class={style.isImg} src={
                        pro.urlID === this.TheselectedUrl ?
                          pro.activeicon : pro.icon
                      } title='加载中...' />
                      <span slot="title">{pro.name}</span>
                    </el-menu-item>
                  )
                }
              })}
            </el-menu>
          </div>
        </div>
      </div >
    </div >
  }
}