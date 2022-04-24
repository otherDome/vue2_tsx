/**
 * @name TodaysTask
 * @author fankai16
 * @Time 2022/04/24
 * @property {boolean} screening   这是打开高级或者基础
 * @property {string}  nakcname  用户名
 * @property {string}  pwd  密码
 * @function onScreeningClk -点击展开高级筛选初级筛选
 * @description 今日任务
 **/

import { Component, Vue, Mixins } from 'vue-property-decorator';
import style from '@/assets/styles/Theuser/TodaysTask.module.scss';
import { onresize } from '@/components/mixins/onresize';
@Component
export default class TodaysTask extends Mixins(onresize) {
  protected screening: boolean = true
  protected value: string = '0'  //临时
  protected isvale: any = ''     //临时
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
    return <div class={style.TodaysTask}>
      <div class={[style.TodaysTask_from, style.elFrom_headermax850]} id='elFromwidth'>
        {
          this.screening === true ?
            <div class={[style.TodaysTask_from_header]}>
              <div class={style.TodaysTask_from_header_l}>
                <el-form
                  size='mini'
                  inline={true}
                >
                  <el-form-item>
                    <el-select v-model={this.value} placeholder="请选择">
                      <el-option
                        label="回访客户"
                        value="0">
                      </el-option>
                      <el-option
                        label="锁定客户"
                        value="1">
                      </el-option>
                      <el-option
                        label="预约回访"
                        value="2">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item class={style.elFrom_headermin810}>
                    <el-input
                      placeholder="请输入疾病名称"
                    ></el-input>
                  </el-form-item>
                  <el-form-item class={style.elFrom_headermin1000}>
                    <el-input
                      placeholder="请输入锁定人"
                    ></el-input>
                  </el-form-item>
                  <el-form-item class={style.elFrom_headermin1100}>
                    <el-input
                      placeholder="请输入手机号"
                    ></el-input>
                  </el-form-item>
                  {/* <el-form-item>
                <el-checkbox size='mini' label="备选项1" border></el-checkbox>
              </el-form-item> */}
                </el-form>
              </div>
              <div class={style.TodaysTask_from_header_r}>
                <el-button
                  icon="el-icon-search"
                  type="primary"
                  size='mini'
                > 查询
                </el-button>
                <el-button
                  type="info"
                  size='mini'
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
            : <div class={[style.TodaysTask_from_footer]}>
              {/*这是高级筛选开始*/}
              <div class={style.TodaysTask_from_footer_bottomTitle}>
                <div class={style.TodaysTask_from_footer_bottomTitle_left}>
                  <div class={style.shaixuan}>
                    <icon-filter class={style.icon_filter} theme="outline" size="16" fill="#409EFF" />
                    <span>高级筛选</span>
                  </div>
                </div>
                <div class={style.TodaysTask_from_footer_bottomTitle_right}>
                  <el-button
                    onClick={this.onScreeningClk.bind(this)}
                    size='mini'
                  >
                    普通筛选
                  </el-button>
                  <el-button
                    icon="el-icon-search"
                    type="primary"
                    size='mini'
                  > 查询
                  </el-button>
                  <el-button
                    type="info"
                    icon="el-icon-refresh-right"
                    size='mini'
                  >
                    重置
                  </el-button>
                </div>
              </div>
              <div class={style.TodaysTask_from_footer_bottofrom}>
                <el-form
                  size='mini'
                  inline={true}
                >
                  <el-form-item label="客户类型">
                    <el-select v-model={this.value} placeholder="请选择">
                      <el-option
                        label="回访客户"
                        value="0">
                      </el-option>
                      <el-option
                        label="锁定客户"
                        value="1">
                      </el-option>
                      <el-option
                        label="预约回访"
                        value="2">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="疾病名称">
                    <el-input
                      placeholder="请输入疾病名称"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="锁定人">
                    <el-input
                      placeholder="请输入锁定人"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="客户手机号">
                    <el-input
                      placeholder="请输入手机号"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="随访时间">
                    <el-date-picker
                      v-model={this.isvale}
                      size='mini'
                      style='width:300px;'
                      type="datetimerange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      align="right">
                    </el-date-picker>
                  </el-form-item>
                  <el-form-item label="数据类型">
                    <el-checkbox size='mini' label="禁用时间" border></el-checkbox>
                  </el-form-item>
                </el-form>
              </div>
            </div>
        }
      </div>
      <div class={[style.TodaysTask_from, style.elFrom_headermin850]}>
        <div class={[style.TodaysTask_from_header]}>
          这是手机端搜索
        </div>
      </div>
      <div class={style.elTable_list}>
        今日任务
      </div>

    </div>
  }
}