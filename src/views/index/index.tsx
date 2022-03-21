

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
import { Component, Vue } from 'vue-property-decorator';
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
  protected AFold: boolean = false
  $Maxer: any;
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
        <componentheader></componentheader>
      </div>
    </div>;
  }
}