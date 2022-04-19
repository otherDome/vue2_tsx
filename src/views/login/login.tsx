


/**
 * @name rebate
 * @author fankai16
 * @Time 2022/03/14
 * @property {string}  nakcname  用户名
 * @property {string}  pwd  密码
 * @function goLoginAPI -登录提交
 * @description 首页登录
 **/

import { Component, Vue } from 'vue-property-decorator';
import style from '@/assets/styles/login/login.module.scss';
// import { throttle } from 'throttle-debounce-ts';
import { goLogin, gomenuAPI } from '@/api/login/login';
@Component
export default class App extends Vue {
  $OnlyMessage: any;
  $Maxer: any;
  private nakcname: string = 'admin'
  private pwd: string = '123456'
  private async goLoginAPI(e: any) {
    let ev = e || window.event
    ev.preventDefault()
    if (this.nakcname === '') {
      this.$OnlyMessage.error('用户名不能为空');
      return
    }
    if (this.pwd === '') {
      this.$OnlyMessage.error('密码不能为空');
      return
    }
    const options = {
      headers: {
        dataType: "json"
      },
      data: {
        username: this.nakcname,
        password: this.pwd
      }
    }
    const res: any = await goLogin(options)
    if (res.code === 0) {
      this.$OnlyMessage.success(res.msg);
      const vuX = new this.$Maxer();
      const tokenJSON = res.data
      vuX.postvuex('information', tokenJSON)
      this.getmenuAPI()
    } else {
      this.$OnlyMessage.error(res.msg);
    }
  }
  private async getmenuAPI() {
    const vuX = new this.$Maxer();
    const routingJson = vuX.getvuex('routingJson')
    const res: any = await gomenuAPI()
    if (res.code === 0) {
      routingJson.ThemenuList = res.data
      vuX.postvuex('routingJson', routingJson)
      this.$router.push({
        name: 'home'
      })
    } else {
      this.$OnlyMessage.error(res.msg);
    }
  }
  //数组去重
  protected duplicate(item: any) {

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
            <el-form
              ref="form_login"
              label-width="80px"
              size='mini'
            >
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
              <el-form-item>
                <el-button
                  props={{
                    "nativeType": 'submit'
                  }}
                  type="primary"
                  class={style.gologin}
                  onClick={this.goLoginAPI.bind(this)}
                  size='mini'>
                  登录
                </el-button>
              </el-form-item>
            </el-form>

          </div>
        </div>
      </div>
    </div>
  }
}