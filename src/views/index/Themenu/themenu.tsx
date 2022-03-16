
/**
 * @name themenu
 * @author fankai16
 * @Time 2022/03/15
 * @property {arr}  navlist  导航数据列表
 * @property {string}  addUrl  选中一级菜单ID
 * @property {string} addUrlName  选中一级菜单名称
 * @property {arr}  ThesecondaryList  选中的二位数组
 * @function goLogin -登录提交
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
  private mounted() {
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
              default-active="2"
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
                console.log("propro", pro)
                if (pro.navlist.length > 0) {
                  const htmlList: any = []
                  /**
                     * @name menu
                     * @author fankai16
                     * @property {arr}  htmlList  二级数据
                     * @description 导航栏二级
                  **/
                  console.log("pro.navlist", pro.navlist)
                  pro.navlist.map((item: modelnavlist) => {
                    console.log("itemitemitem", item.navlist)
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
                    <div>小于0</div>
                  )
                }

              })}
              {/* <el-submenu index="1" >
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>

              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item> */}
            </el-menu>
          </div>
        </div>
      </div>
    </div >;
  }
}