
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
 * @description 导航栏
 **/
import { Component, Vue } from 'vue-property-decorator';
import style from '@/assets/styles/index/Themenu/themenu.module.scss';
const navlist = require('@/assets/json/navlist.ts')
import { modelnavlist } from '@/assets/model/navlist'
@Component
export default class App extends Vue {
  private navlist = navlist
  private addUrl: string = ''
  private addUrlName: string = ''
  private ThesecondaryList: any = []
  private TheselectedUrl: string = ''
  private newTimeull: any = ''
  private collapseTransition: boolean = false
  $Maxer: any;
  private mounted() {
    this.init()
  }
  private init() {
    const vuX = new this.$Maxer();
    const routingJson = vuX.getvuex('routingJson')
    this.TheselectedUrl = routingJson.urlID
    const Homeindex = routingJson.Homeindex
    console.log("测试啊", routingJson)
    if (this.navlist.length > 0) {
      this.addUrl = this.navlist[Homeindex].pathname
      this.addUrlName = this.navlist[Homeindex].name
      this.ThesecondaryList = this.navlist[Homeindex].navlist
      this.TheselectedUrl = routingJson.urlID
    }
  }
  private onPagesRoter(item: any, index: number) {
    const vuX = new this.$Maxer();
    const routingJson = vuX.getvuex('routingJson')
    this.addUrl = item.pathname
    this.addUrlName = item.name
    this.ThesecondaryList = item.navlist
    routingJson.Homeindex = index
    if (item.navlist.length > 0) {
      routingJson.urlID = item.navlist[0].urlID
      this.TheselectedUrl = item.navlist[0].urlID
    }
    vuX.postvuex('routingJson', routingJson)
    this.newTimeull = new Date().getTime()
    console.log('this.newTimeull', this.newTimeull)
    console.log('数据执行', this.TheselectedUrl)
  }
  private ongoroter(item: any) {
    const vuX = new this.$Maxer();
    const routingJson = vuX.getvuex('routingJson')
    const newlist = routingJson.newlist
    if (newlist.length > 0) {
      for (let index = 0; index < newlist.length; index++) {
        if (newlist[index].urlID === item.urlID) {
          return
        } else {
          routingJson.path = item.path
          routingJson.pathname = item.pathname
          routingJson.urlID = item.urlID
          this.TheselectedUrl = item.urlID
          vuX.postvuex('routingJson', routingJson)
        }
      }
    } else {
      routingJson.path = item.path
      routingJson.pathname = item.pathname
      routingJson.urlID = item.urlID
      this.TheselectedUrl = item.urlID
      vuX.postvuex('routingJson', routingJson)
    }
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
              class="el-menu-vertical-demo"
              key={this.newTimeull}
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
                          <el-menu-item index={threeitem.urlID}>{threeitem.name}</el-menu-item>
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
                        <el-menu-item index={item.urlID}>
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
                    <el-menu-item index={pro.urlID} onClick={this.ongoroter.bind(this, pro)}>
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