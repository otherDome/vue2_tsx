
/**
 * @name Users
 * @author fankai16
 * @Time 2022/03/30
 * @property {string}  nakcname  用户名
 * @property {string}  pwd  密码
 * @function goLoginAPI -登录提交
 * @description 用户分配
 **/
import { Component, Vue } from 'vue-property-decorator';
import style from '@/assets/styles/Theuser/Users.module.scss';
@Component
export default class App extends Vue {

  protected mounted() {

  }
  protected render() {
    return <div class={style.Users}>
      用户分配
    </div>
  }
}