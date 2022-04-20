/**
 * @name userservice
 * @author fankai16
 * @Time 2022/04/20
 * @property {number}  elFromwidth  这是usinof 的元素宽度
 * @property {any}  Widthtimer  这是节流
 * @property {boolean} eldialogVsibleSync  弹窗详情
 * @property {boolean} screening   这是打开高级或者基础
 * @function onCheckthedetails  详情弹窗
 * @function onScreeningClk -点击展开高级筛选初级筛选
 * @function onOnreSize      获取指定元素的宽度
 * @description 用户服务
 **/
import { Component, Mixins } from 'vue-property-decorator';
import style from '@/assets/styles/Theuser/userservice.module.scss';
import { onresize } from '@/components/mixins/onresize';
@Component
export default class userservice extends Mixins(onresize) {
  protected isvalue: string = ''
  protected screening: boolean = true

  protected onScreeningClk() {
    this.screening = !this.screening
  }
  protected created() {
    this.onOnreSize('elFromwidth')
  }
  protected mounted() {
    this.onresizeInit('elFromwidth')
  }
  protected render() {
    return <div class={style.userservice}>
      <div class={[style.userservice_elfrom, style.userservice_elfrommin850]} id='elFromwidth'>
        {
          this.screening === false ?
            <div class={style.userservice_elfrom_header}>
              <div class={style.userservice_elfrom_left}>
                <el-form
                  size='mini'
                  inline={true}
                >
                  <el-form-item>
                    <el-input
                      placeholder="请输入会员姓名/手机号"
                    ></el-input>
                  </el-form-item>
                  {
                    this.AFold_bus === false ?
                      <el-form-item class={style.userservice_elfrom800}>
                        <el-input
                          placeholder="请输入商品名称"
                        ></el-input>
                      </el-form-item>
                      :
                      ''
                  }
                  <el-form-item class={style.userservice_elfrom1000}>
                    <el-select
                      filterable
                      v-model={this.isvalue}
                      placeholder="商品类别">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item class={style.userservice_elfrom1200}>
                    <el-input
                      placeholder="请输入锁定人"
                    ></el-input>
                  </el-form-item>
                  <el-form-item class={style.userservice_elfrom1400}>
                    <el-input
                      placeholder="请输入微信号"
                    ></el-input>
                  </el-form-item>
                </el-form>
              </div>
              <div class={style.userservice_elfrom_right}>
                <el-button
                  icon="el-icon-search"
                  size="mini"
                  type="primary"
                > 查询
                </el-button>
                <el-button
                  type="info"
                  size="mini"
                  icon="el-icon-refresh-right"
                >
                  重置
                </el-button>
                <div class={style.fatherscreening}
                  onClick={this.onScreeningClk.bind(this)}
                >
                  <div class={style.screening}>
                    <icon-filter class={style.icon_filter} theme="outline" size="16" fill="#409EFF" />
                    <span>高级筛选</span>
                  </div>
                </div>
              </div>
            </div>
            :
            <div class={style.userservice_elfrom_footer}>
              <div class={style.userservice_elfrom_header_h}>
                <div class={style.userservice_elfrom_header_h_left}>
                  <div class={style.shaixuan}>
                    <icon-filter class={style.icon_filter} theme="outline" size="16" fill="#409EFF" />
                    <span>高级筛选</span>
                  </div>
                </div>
                <div class={style.userservice_elfrom_header_h_right}>
                  <el-button
                    onClick={this.onScreeningClk.bind(this)}
                    size='mini'
                  >
                    普通筛选
                  </el-button>
                  <el-button
                    icon="el-icon-search"
                    size="mini"
                    type="primary"
                  > 查询
                  </el-button>
                  <el-button
                    type="info"
                    size="mini"
                    icon="el-icon-refresh-right"
                  >
                    重置
                  </el-button>
                </div>
              </div>
              <div class={style.userservice_elfrom_header_b}>
                <el-form
                  size='mini'
                  inline={true}
                >
                  <el-form-item>
                    <el-input
                      placeholder="请输入会员姓名/手机号"
                    ></el-input>
                  </el-form-item>
                  {
                    this.AFold_bus === false ?
                      <el-form-item class={style.userservice_elfrom800}>
                        <el-input
                          placeholder="请输入商品名称"
                        ></el-input>
                      </el-form-item>
                      :
                      ''
                  }
                  <el-form-item class={style.userservice_elfrom1000}>
                    <el-select
                      filterable
                      v-model={this.isvalue}
                      placeholder="商品类别">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item class={style.userservice_elfrom1200}>
                    <el-input
                      placeholder="请输入锁定人"
                    ></el-input>
                  </el-form-item>
                  <el-form-item class={style.userservice_elfrom1400}>
                    <el-input
                      placeholder="请输入微信号"
                    ></el-input>
                  </el-form-item>
                </el-form>
              </div>
            </div>
        }


      </div>
      <div class={[style.userservice_elfrom, style.userservice_elfrommax850]}>
        这是手机端
      </div>
    </div>
  }
}