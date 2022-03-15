


/**
 * @name rebate
 * @author fankai16
 * @Time 2022/03/14
 * @property {string}  nakcname  用户名
 * @property {string}  pwd  密码
 * @function goLogin -登录提交
 * @description 首页登录
 **/
import { Component, Vue } from 'vue-property-decorator';
import style from '@/assets/styles/login/login.module.scss';
import { throttle } from 'throttle-debounce-ts';
import { goLogin } from '@/api/login/login';
@Component
export default class App extends Vue {
  private nakcname: string = ''
  private pwd: string = ''
  $OnlyMessage: any;
  private goLogin = throttle(1000, this.goLoginAPI)
  private async goLoginAPI() {
    if (this.nakcname === '') {
      this.$OnlyMessage.error('用户名不能为空');
      return
    }
    if (this.pwd === '') {
      this.$OnlyMessage.error('密码不能为空');
      return
    }
    this.$router.push({
      name: "index"
    })
    // const options = {
    //   headers: {
    //     dataType: "json"
    //   },
    //   data: {
    //     userName: this.nakcname,
    //     password: this.pwd
    //   }
    // }
    // const res: any = await goLogin(options)
    // if (res.code === 1) {
    //   this.$router.push({

    //   })
    // } else {
    //   this.$OnlyMessage.error(res.msg);
    // }
  }
  protected render() {
    return <div class={style.login}>
      <div class={style.login_content}>
        <div class={style.login_logo}>
          <p class={style.login_logo_title}>蜜橙好医</p>
          <p class={style.login_logo_sy}>MI CHENG HAO YI</p>
        </div>
        <div class={style.login_from}>
          <div class={style.biaodan}>
            <p>用户登录</p>
            <el-form ref="form_login" label-width="80px" size='mini'>
              <el-form-item label="用户名">
                <el-input v-model={this.nakcname} placeholder="请输入用户名">
                  <i slot="prefix" class="el-input__icon el-icon-s-custom"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input show-password v-model={this.pwd} placeholder="请输入用户密码">
                  <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
              </el-form-item>
            </el-form>
            <el-button type="primary" class={style.gologin} onClick={this.goLogin.bind(this)} size='mini'>登录</el-button>
          </div>
        </div>
      </div>
    </div>
  }
}