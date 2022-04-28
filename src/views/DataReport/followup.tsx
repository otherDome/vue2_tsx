/**
 * @name followup
 * @author fankai16
 * @Time 2022/04/28
 * @property {boolean} eldialogVsibleSync  弹窗详情
 * @property {boolean} elTabletsxborder 是否展示列表Border
 * @property {boolean} elTabletsxstripe 是否展示斑马线
 * @property {string}  elTabletsxsize   列表大小
 * @property {string}  elTabletsxcellStyle  列表行内样式
 * @property {string}  elTabletsxheadercellstyle  列表头部样式
 * @property {string}  elTabletsxoddnumber   列表奇数背景颜色
 * @property {string}  elTabletsxevennumber  列表偶数背景颜色
 * @property {string}  elTabletsxheaderBGS   列表头部背景颜色
 * @function onfollowup     -随访点击
 * @function onScreeningClk -点击展开高级筛选初级筛选
 * @description 随访记录
 **/
import { Component, Mixins } from 'vue-property-decorator';
import { onresize } from '@/components/mixins/onresize';
import style from '@/assets/styles/DataReport/followup.module.scss';
import datalistTableTitle from '@/components/elementUItsx/eltabletsx/datalistTableTitle'
import elTabletsx from '@/components/elementUItsx/eltabletsx/elTabletsx.vue'
@Component({
  components: {
    datalistTableTitle,
    elTabletsx
  }
})
export default class followup extends Mixins(onresize) {
  //临时变量
  protected isvalue: string = ''
  protected isvalue1: string = ''
  protected isvalue2: string = ''
  protected screening: boolean = false

  protected onScreeningClk() {
    this.screening = !this.screening
    console.log('点击高级筛选')
  }
  protected created() {
    this.onOnreSize('elFromwidth')
  }
  protected mounted() {
    this.onresizeInit('elFromwidth')
  }
  protected render() {
    return <div class={style.followup}>
      <div class={style.followup_from}>
        {
          this.screening === false ? <div class={style.followup_from_pt}>
            <div class={style.followup_from_pt_left}>
              <el-form
                size='mini'
                inline={true}
              >
                <el-form-item>
                  <el-input v-model={this.isvalue} size='mini' placeholder="请输入会员姓名"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input v-model={this.isvalue} size='mini' placeholder="请输入回访人姓名"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input v-model={this.isvalue} size='mini' placeholder="请输入会员手机号"></el-input>
                </el-form-item>
              </el-form>
            </div>
            <div class={style.followup_from_pt_right}>
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
              <div class={style.screening} onClick={this.onScreeningClk.bind(this)}>
                <icon-filter class={style.icon_filter} theme="outline" size="16" fill="#409EFF" />
                <span>高级筛选</span>
              </div>
            </div>
          </div> : <div class={style.followup_from_gj}>
            <div class={style.followup_from_gj_top} >
              <div class={style.followup_from_gj_top_left}>
                <div class={style.shaixuan}>
                  <icon-filter class={style.icon_filter} theme="outline" size="16" fill="#409EFF" />
                  <span>高级筛选</span>
                </div>
              </div>
              <div class={style.followup_from_gj_top_right}>
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
            <div class={style.followup_from_gj_footer}>
              <el-form
                size='mini'
                inline={true}
              >
                <el-form-item label='会员姓名'>
                  <el-input v-model={this.isvalue} size='mini' placeholder="请输入会员姓名"></el-input>
                </el-form-item>
                <el-form-item label='回访姓名'>
                  <el-input v-model={this.isvalue} size='mini' placeholder="请输入回访人姓名"></el-input>
                </el-form-item>
                <el-form-item label='会员手机号'>
                  <el-input v-model={this.isvalue} size='mini' placeholder="请输入会员手机号"></el-input>
                </el-form-item>
                <el-form-item label='时间类别'>
                  <el-select
                    filterable
                    class={style.Timezone178}
                    v-model={this.isvalue}
                    placeholder="请选择时间类别">
                    <el-option label="随访时间" value="0"></el-option>
                    <el-option label="时间随访" value="1"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label='时间区域'>
                  <el-date-picker
                    v-model={this.isvalue1}
                    class={style.Timezone}
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                  </el-date-picker>
                </el-form-item>
              </el-form>
            </div>
          </div>
        }
      </div>
      <div class={style.followup_Table}>
        随访记录
      </div>

    </div>
  }
}