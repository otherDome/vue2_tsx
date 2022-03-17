
/**
 * @name themenu
 * @author fankai16
 * @Time 2022/03/15
 * @property {arr}  navlist  导航数据列表
 * @property {string}  addUrl  选中一级菜单ID
 * @property {string} addUrlName  选中一级菜单名称
 * @property {arr}  ThesecondaryList  选中的二位数组
 * @function goLogin -登录提交
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
  private ThesecondaryList = []
  $Maxer: any;
  private mounted() {
    const vuX = new this.$Maxer();
    const routingJson = vuX.getvuex('routingJson')
    console.log("测试啊", routingJson)
    if (this.navlist.length > 0) {
      this.addUrl = this.navlist[0].pathname
      this.addUrlName = this.navlist[0].name
      this.ThesecondaryList = this.navlist[0].navlist
    }
  }
  private onPagesRoter(item: any) {
    this.addUrl = item.pathname
    this.addUrlName = item.name
    this.ThesecondaryList = item.navlist
    console.log("this.ThesecondaryList", this.ThesecondaryList)
  }
  private ongoroter(item: any) {
    console.log('aaaaa', item)
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
          vuX.postvuex('routingJson', routingJson)
        }
      }
    } else {
      routingJson.path = item.path
      routingJson.pathname = item.pathname
      routingJson.urlID = item.urlID
      vuX.postvuex('routingJson', routingJson)
    }
    console.log('getvuex', vuX.getvuex('routingJson'))
    //vuX.postvuex('ceshi', '修改了')

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
              {this.navlist.map((pro: modelnavlist) => {
                return (
                  <li
                    class={this.addUrl === pro.pathname ? style.isLiactive : "3"}
                    onClick={this.onPagesRoter.bind(this, pro)}
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
              default-active="1-2"
              class="el-menu-vertical-demo"
              props={{
                defaultOpeneds: ['1-1', '1-2']
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
                      <i class="el-icon-document"></i>
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