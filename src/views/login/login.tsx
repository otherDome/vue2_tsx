

import { Component, Vue } from 'vue-property-decorator';
import style from '@/views/login/style/login.module.scss';
@Component
export default class App extends Vue {
  private logs() {
    console.log("aaa")
    this.$router.push({
      path: '/index'
    });
  }
  protected render() {
    return <div class={style.login}>
      这是登录
      <el-button type="danger" onClick={this.logs.bind(this)}>危险按钮</el-button>
    </div>;
  }
}