

/**
 * @name index
 * @author fankai16
 * @Time 2022/03/14
 * @property {string}  nakcname  用户名
 * @function goLogin -登录提交
 * @description 首页父级
 **/
import { Component, Vue } from 'vue-property-decorator';
import style from '@/assets/styles/index/index.module.scss';
import themenu from '@/views/index/Themenu/themenu'
@Component({
  components: {
    themenu
  }
})
export default class App extends Vue {
  protected render() {
    return <div class={style.fatherInde}>
      <div class={style.fatherInde_letf}>
        <themenu></themenu>
      </div>
      <div class={style.fatherInde_right}>
        右侧
      </div>
    </div>;
  }
}