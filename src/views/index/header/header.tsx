/**
 * @name header
 * @author fankai16
 * @Time 2022/03/21
 * @property {arr}  navlist  导航数据列表
 * @property {arr}  breadcrumbList 会员数据列表
 * @property {boolean}  AFold   是否展开导航
 * @property {arr}  message  消息列表
 * @function init -页面初始化
 * @function AFoldClick  导航展开收起
 * @function breadcrumbClick  头部面包点击
 * @function Therefresh   刷新了全局
 * @function Fullscreen   全屏
 * @function  messageLoading   消息加载
 * @description 导航栏
 **/

import { Component, Vue, Inject } from 'vue-property-decorator';
import style from '@/assets/styles/index/header/header.module.scss';
@Component
export default class App extends Vue {
  @Inject('reload') readonly reload!: Function;
  $Maxer: any;
  protected breadcrumbList: any = [
    {
      path: '/index',
      pathname: "首页"
    }
  ]
  protected AFold: boolean = true

  protected message: any = [
    "这是一条消息01",
    "这是一条消息02",
    "这是一条消息03",
    "这是一条消息04",
    "这是一条消息05",
    "这是一条消息06",
    "这是一条消息07",
    "这是一条消息08",
    "这是一条消息09"
  ]

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
  protected Therefresh() {
    this.reload();
  }
  protected Fullscreen() {
    var element: any = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      // 兼容火狐
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      // 兼容谷歌
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      // 兼容IE
      element.msRequestFullscreen();
    }
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
  protected messageLoading() {
    console.log("ssssaazxc")
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
          <div class={style.header_right_l}>
            <el-popover
              placement="top-start"
              title="通知"
              width="200"
              trigger="hover">
              <span slot="reference">
                <el-badge
                  props={{
                    value: 2,
                    max: 99
                  }}
                >
                  <icon-remind
                    theme="outline"
                    size="16"
                    fill="#5D5D5F"
                    class={[style.Thebell, style.xiaoshou]}
                  />
                </el-badge>
              </span>
              <div>
                <ul
                  class={style.infinitelist}
                  style="height: 80px;overflow-y: scroll;list-style: none;"
                  v-infinite-scroll={
                    this.messageLoading
                  }
                >
                  {
                    this.message.map((item: any) => {
                      return (
                        <li class="infinite-list-item">{item}</li>
                      )
                    })
                  }

                </ul>
              </div>
            </el-popover>
            <icon-full-screen
              theme="outline"
              size="16"
              fill="#5D5D5F"
              onClick={this.Fullscreen.bind(this)}
              class={[style.xiaoshou, style.isicon]}
            />
            <icon-refresh
              class={style.xiaoshou}
              onClick={this.Therefresh.bind(this)}
              theme="outline"
              size="16"
              fill="#5D5D5F"
            />
          </div>
          <div class={style.header_right_r}>
            <el-dropdown>
              <div class={style.admin}>
                <img class={style.ISimg} src='https://i.gtimg.cn/club/item/face/img/2/16022_100.gif'></img>
                <span>admin</span>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
      <div class={style.header_bottom}>
        头部的底部
      </div>
    </div >
  }
}
