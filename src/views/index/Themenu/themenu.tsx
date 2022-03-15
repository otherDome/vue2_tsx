
/**
 * @name themenu
 * @author fankai16
 * @Time 2022/03/15
 * @property {arr}  navlist  导航数据列表
 * @property {string}  pwd  密码
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
  private ThesecondaryList = []
  private mounted() {
  }
  private onPagesRoter(item: any) {
    this.addUrl = item.pathname
    this.ThesecondaryList = item.navlist
    console.log("this.ThesecondaryList", this.ThesecondaryList)
  }
  protected render() {
    return <div class={style.themenu}>
      <div class={style.themenu_box}>
        <div class={style.themenu_boxleft}>
          <div class={style.themenu_boxleft_top}>
            <icon-home
              theme="outline"
              size="30"
              fill="#fff"
              strokeLinejoin="miter"
              strokeLinecap="square" />
          </div>
          <div class={style.themenu_boxleft_footer}>
            <ul>
              {this.navlist.map((pro: modelnavlist) => {
                return (
                  <li
                    class={this.addUrl === pro.pathname ? style.isLiactive : ""}
                    onClick={this.onPagesRoter.bind(this, pro)}
                  >
                    <img src={pro.icon} />
                    <p>{pro.name}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div class={style.themenu_boxright}>
          <p>eeeee33</p>
        </div>
      </div>
    </div>;
  }
}