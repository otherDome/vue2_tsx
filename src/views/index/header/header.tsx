/**
 * @name header
 * @author fankai16
 * @Time 2022/03/21
 * @property {arr}  navlist  导航数据列表
 * @property {arr}  breadcrumbList 会员数据列表
 * @property {boolean}  AFold   是否展开导航
 * @function init -页面初始化
 * @function AFoldClick  导航展开收起
 * @function breadcrumbClick  头部面包点击
 * @description 导航栏
 **/

import { Component, Vue } from 'vue-property-decorator';
import style from '@/assets/styles/index/header/header.module.scss';
@Component
export default class App extends Vue {
  $Maxer: any;
  protected breadcrumbList: any = [
    {
      path: '/index',
      pathname: "首页"
    }
  ]
  protected AFold: boolean = true
  protected mounted() {
    const vuX = new this.$Maxer();
    const routingJson = vuX.getvuex('routingJson')
    this.init(routingJson)
    this.$bus.$on('breadcrumb', () => {
      const dynamicJSON = vuX.getvuex('routingJson')
      this.breadcrumbList = dynamicJSON.breadcrumb
    });

  }
  protected init(routingJson: any) {
    this.AFold = routingJson.AFold
    this.breadcrumbList = routingJson.breadcrumb
    this.$bus.$on('AFold_bus', (e: boolean) => {
      this.AFold = e
    });
  }
  protected AFoldClick(type: string) {
    this.AFold = !this.AFold
    this.$bus.$emit('AFold_bus', this.AFold)
  }
  protected breadcrumbClick(item: any) {
    const vuX = new this.$Maxer();
    const routingJson = vuX.getvuex('routingJson')
    if (item.pathname === 'home') {
      const breadcrumblist = []
      breadcrumblist.push(routingJson.breadcrumb[0])
      const vxDataJson = {
        AFold: routingJson.AFold,
        Homeindex: 0,
        newlist: routingJson.newlist,
        oldList: routingJson.oldList,
        breadcrumb: breadcrumblist,
        path: '/home',
        pathname: "home",
        urlID: "1-1"
      }
      this.breadcrumbList = breadcrumblist
      console.log('breadcrumblist', breadcrumblist)
      vuX.postvuex('routingJson', vxDataJson)
      this.$bus.$emit('indexInit')
      this.$router.push({
        name: item.pathname
      })
    } else {
      this.$router.push({
        name: item.pathname
      })
    }

  }
  protected render() {
    const isbreadcrumbList: any = []
    return <div class={style.header}>
      <div class={style.header_top}>
        <div class={style.header_left}>
          <div class={style.header_left_btnl}>
            {
              this.AFold === true ?
                <icon-expand-right
                  theme="outline"
                  size="16"
                  fill="#5D5D5F"
                  onClick={this.AFoldClick.bind(this, '1')}
                  class={style.ispointer} /> :
                <icon-expand-left
                  theme="outline"
                  size="16"
                  fill="#5D5D5F"
                  onClick={this.AFoldClick.bind(this, '2')}
                  class={style.ispointer} />
            }
          </div>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            {
              this.breadcrumbList.map((item: any) => {
                isbreadcrumbList.push(
                  <el-breadcrumb-item>
                    <span
                      class={style.header_left_breadcrumb}
                      onClick={this.breadcrumbClick.bind(this, item)}>
                      {item.name}
                    </span>
                  </el-breadcrumb-item>
                )
              }
              )
            }
            {isbreadcrumbList}
          </el-breadcrumb>
        </div>
        <div class={style.header_right}>
          右侧
        </div>
      </div>
      <div class={style.header_bottom}>
        头部的底部
      </div>
    </div >
  }
}
