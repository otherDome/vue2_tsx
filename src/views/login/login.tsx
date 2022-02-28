

import { Component, Vue } from 'vue-property-decorator';
import style from '@/views/login/style/login.module.scss';
@Component
export default class App extends Vue {
  private logs() {
    console.log("aaa", this.nakcname)
    // this.$router.push({
    //   path: '/index'
    // });
  }
  private elProps: any = {
    name: ""
  }
  private nakcname: string = ''
  protected render() {
    return <div class={style.login}>
      这是登录
      <el-form ref="form" props={{
        model: this.elProps
      }} label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model={this.nakcname} placeholder="请输入内容"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="danger" onClick={this.logs.bind(this)}>危险按钮</el-button>
    </div>;
  }
}