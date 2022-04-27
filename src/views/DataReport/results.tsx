/**
 * @name results
 * @author fankai16
 * @Time 2022/04/27
 * @property {string}  value1           时间区域变量
 * @property {boolean} eldialogVsibleSync  弹窗详情
 * @property {boolean} elTabletsxborder 是否展示列表Border
 * @property {boolean} elTabletsxstripe 是否展示斑马线
 * @property {string}  elTabletsxsize   列表大小
 * @property {string}  elTabletsxcellStyle  列表行内样式
 * @property {string}  elTabletsxheadercellstyle  列表头部样式
 * @property {string}  elTabletsxoddnumber   列表奇数背景颜色
 * @property {string}  elTabletsxevennumber  列表偶数背景颜色
 * @property {string}  elTabletsxheaderBGS   列表头部背景颜色
 * @property {boolean} screening   这是打开高级或者基础
 * @function onfollowup     -随访点击
 * @function onCheckthedetails  详情弹窗
 * @function onCancelPopupwindow  关闭详情
 * @function onScreeningClk -点击展开高级筛选初级筛选
 * @description 业绩汇总
 **/
import { Component, Vue } from 'vue-property-decorator';
import style from '@/assets/styles/DataReport/results..module.scss';
import datalistTableTitle from '@/components/elementUItsx/eltabletsx/datalistTableTitle'
import elTabletsx from '@/components/elementUItsx/eltabletsx/elTabletsx.vue'
import eldialog from '@/components/elementUItsx/eldialog/eldialog.vue'
@Component({
  components: {
    elTabletsx,
    eldialog,
    datalistTableTitle
  }
})
export default class App extends Vue {
  //临时变量区域
  protected value1: string = ''
  protected isvalue: string = ''
  //临时变量区域结束
  //这是数据列表tableData 开始
  protected tableData: any = [
    {
      id: "12987122",
      name: "王小虎",
      amount1: "234",
      amount2: "3.2",
      amount3: 10,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
      amount9: "3.2",
      amount10: "-3.2",
      amount11: "983.2",
      amount12: "-3.2",
      amount13: "53.2",
    },
    {
      id: "12987122",
      name: "王小虎",
      amount1: "234",
      amount2: "3.2",
      amount3: 10,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
      amount9: "3.2",
      amount10: "-3.2",
      amount11: "983.2",
      amount12: "-3.2",
      amount13: "53.2",
    },
    {
      id: "12987122",
      name: "王小虎",
      amount1: "234",
      amount2: "3.2",
      amount3: 10,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
      amount9: "3.2",
      amount10: "-3.2",
      amount11: "983.2",
      amount12: "-3.2",
      amount13: "53.2",
    },
    {
      id: "12987122",
      name: "王小虎",
      amount1: "234",
      amount2: "3.2",
      amount3: 10,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
      amount9: "3.2",
      amount10: "-3.2",
      amount11: "983.2",
      amount12: "-3.2",
      amount13: "53.2",
    },
    {
      id: "12987123",
      name: "王小虎",
      amount1: "165",
      amount2: "4.43",
      amount3: 12,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
      amount9: "3.2",
      amount10: "-3.2",
      amount11: "983.2",
      amount12: "-3.2",
      amount13: "53.2",
    },
    {
      id: "12987124",
      name: "王小虎",
      amount1: "324",
      amount2: "1.9",
      amount3: 9,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
      amount9: "3.2",
      amount10: "-3.2",
      amount11: "983.2",
      amount12: "-3.2",
      amount13: "53.2",
    },
    {
      id: "12987125",
      name: "王小虎",
      amount1: "621",
      amount2: "2.2",
      amount3: 17,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
      amount9: "3.2",
      amount10: "-3.2",
      amount11: "983.2",
      amount12: "-3.2",
      amount13: "53.2",
    },
    {
      id: "12987126",
      name: "王小虎",
      amount1: "539",
      amount2: "4.1",
      amount3: 15,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
      amount9: "3.2",
      amount10: "-3.2",
      amount11: "983.2",
      amount12: "-3.2",
      amount13: "53.2",
    },
    {
      id: "12987126",
      name: "王小虎",
      amount1: "539",
      amount2: "4.1",
      amount3: 15,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
      amount9: "3.2",
      amount10: "-3.2",
      amount11: "983.2",
      amount12: "-3.2",
      amount13: "53.2",
    },
    {
      id: "12987126",
      name: "王小虎",
      amount1: "539",
      amount2: "4.1",
      amount3: 15,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
      amount9: "3.2",
      amount10: "-3.2",
      amount11: "983.2",
      amount12: "-3.2",
      amount13: "53.2",
    },
    {
      id: "12987126",
      name: "王小虎",
      amount1: "539",
      amount2: "4.1",
      amount3: 15,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
      amount9: "3.2",
      amount10: "-3.2",
      amount11: "983.2",
      amount12: "-3.2",
      amount13: "53.2",
    },
    {
      id: "12987126",
      name: "王小虎",
      amount1: "539",
      amount2: "4.1",
      amount3: 15,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
      amount9: "3.2",
      amount10: "-3.2",
      amount11: "983.2",
      amount12: "-3.2",
      amount13: "53.2",
    },
    {
      id: "12987126",
      name: "王小虎",
      amount1: "539",
      amount2: "4.1",
      amount3: 15,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
      amount9: "3.2",
      amount10: "-3.2",
      amount11: "983.2",
      amount12: "-3.2",
      amount13: "53.2",
    },
    {
      id: "12987126",
      name: "王小虎",
      amount1: "539",
      amount2: "4.1",
      amount3: 15,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
      amount9: "3.2",
      amount10: "-3.2",
      amount11: "983.2",
      amount12: "-3.2",
      amount13: "53.2",
    },
    {
      id: "12987126",
      name: "王小虎",
      amount1: "539",
      amount2: "4.1",
      amount3: 15,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
      amount9: "3.2",
      amount10: "-3.2",
      amount11: "983.2",
      amount12: "-3.2",
      amount13: "53.2",
    },
    {
      id: "12987126",
      name: "王小虎",
      amount1: "539",
      amount2: "4.1",
      amount3: 15,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
      amount9: "3.2",
      amount10: "-3.2",
      amount11: "983.2",
      amount12: "-3.2",
      amount13: "53.2",
    },
    {
      id: "12987126",
      name: "王小虎",
      amount1: "539",
      amount2: "4.1",
      amount3: 15,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
      amount9: "3.2",
      amount10: "-3.2",
      amount11: "983.2",
      amount12: "-3.2",
      amount13: "53.2",
    },
    {
      id: "12987126",
      name: "王小虎",
      amount1: "539",
      amount2: "4.1",
      amount3: 15,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
      amount9: "3.2",
      amount10: "-3.2",
      amount11: "983.2",
      amount12: "-3.2",
      amount13: "53.2",
    },
    {
      id: "12987126",
      name: "王小虎",
      amount1: "539",
      amount2: "4.1",
      amount3: 15,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
      amount9: "3.2",
      amount10: "-3.2",
      amount11: "983.2",
      amount12: "-3.2",
      amount13: "53.2",
    },
    {
      id: "12987126",
      name: "王小虎",
      amount1: "539",
      amount2: "4.1",
      amount3: 15,
      amount4: "3.2",
      amount5: "3.2",
      amount6: "3.2",
      amount7: "3.2",
      amount8: "3.2",
      amount9: "3.2",
      amount10: "-3.2",
      amount11: "983.2",
      amount12: "-3.2",
      amount13: "53.2",
    },
  ];
  protected elTableColumn: any = [
    {
      label: "ID",
      prop: "id",
      width: "100",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      type: "Thecustom",
      label: "姓名",
      width: "85",
      prop: "name",
      showOverflowTooltip: true,
      renderHeader: (h: any, { column }: any) => {
        return [
          column.label,
          h(
            "el-tooltip",
            {
              props: {
                content: "这是提示文案123",
                placement: "top",
              },
            },
            [
              h(
                "span",
                {
                  class: "el-icon-question",
                  style: "color:#409EFF;"
                }
              )
            ]
          ),
        ];
      },
      showtableColumn: true
    }, {
      label: "参数1",
      minwidth: '85',
      prop: "amount1",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数2",
      minwidth: '85',
      sortable: true,
      prop: "amount2",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数3",
      minwidth: '85',
      sortable: true,
      prop: "amount3",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数4",
      minwidth: '85',
      sortable: true,
      prop: "amount4",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数5",
      minwidth: '85',
      sortable: true,
      prop: "amount5",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数5",
      minwidth: '85',
      sortable: true,
      prop: "amount6",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数6",
      minwidth: '85',
      prop: "amount7",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数7",
      minwidth: '85',
      prop: "amount8",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数8",
      minwidth: '85',
      prop: "amount9",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数9",
      minwidth: '85',
      prop: "amount9",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数10",
      minwidth: '95',
      prop: "amount10",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数11",
      minwidth: '95',
      prop: "amount11",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数12",
      minwidth: '95',
      prop: "amount12",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数13",
      minwidth: '95',
      prop: "amount13",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      type: "operation",
      minwidth: '120',
      label: "操作",
      prop: "",
      fixed: "right",
      showtableColumn: true
    }
  ]
  protected detailsColumn: any = [
    {
      label: "ID",
      prop: "id",
      width: "100",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      type: "Thecustom",
      label: "姓名",
      width: "85",
      prop: "name",
      showOverflowTooltip: true,
      renderHeader: (h: any, { column }: any) => {
        return [
          column.label,
          h(
            "el-tooltip",
            {
              props: {
                content: "这是提示文案123",
                placement: "top",
              },
            },
            [
              h(
                "span",
                {
                  class: "el-icon-question",
                  style: "color:#409EFF;"
                }
              )
            ]
          ),
        ];
      },
      showtableColumn: true
    }, {
      label: "参数1",
      minwidth: '85',
      prop: "amount1",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数2",
      minwidth: '85',
      prop: "amount2",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数3",
      minwidth: '85',
      prop: "amount3",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数4",
      minwidth: '85',
      prop: "amount4",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数5",
      minwidth: '85',
      prop: "amount5",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数5",
      minwidth: '85',
      prop: "amount6",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数6",
      minwidth: '85',
      prop: "amount7",
      showOverflowTooltip: true,
      showtableColumn: true
    },
  ]
  protected eldialogVsibleSync: boolean = false
  protected screening: boolean = true

  //表格设置数据变量
  protected elTabletsxborder: boolean = true
  protected elTabletsxstripe: boolean = true
  protected elTabletsxsize: String = 'mini'
  protected elTabletsxcellStyle: string = 'height:28px;padding:0px;font-size:13px;line-height: 28px;text-align: center;'
  protected elTabletsxheadercellstyle: string = 'height:28px;padding:0px;text-align: center;'
  protected elTabletsxoddnumber: string = 'background: rgb(238 250 255 / 80%);'
  protected elTabletsxevennumber: string = 'background: rgb(238 250 255 / 30%);'
  protected elTabletsxheaderBGS: string = "background: linear-gradient(to bottom, #EEF5FB 0%,#E2EDFA 100%);"
  //表格设置
  protected onCancelPopupwindow() {
    this.eldialogVsibleSync = false
  }
  protected onCheckthedetails(item: any) {
    this.eldialogVsibleSync = true
    console.log("点击详情获取的数据", item)
    console.log("点击详情获取的数据eldialogVsibleSync", this.eldialogVsibleSync)
  }
  protected onScreeningClk() {
    this.screening = !this.screening
  }
  protected mounted() {

  }
  protected render() {
    return <div class={style.results}>
      <div class={style.results_from}>
        {
          this.screening === false ? <div class={style.results_from_header}>
            <div class={style.results_from_left}>
              <el-form
                size='mini'
                inline={true}
              >
                <el-form-item>
                  <el-select
                    filterable
                    v-model={this.isvalue}
                    placeholder="请选择订单类别">
                    <el-option label="退货单" value="0"></el-option>
                    <el-option label="零售单" value="1"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-select
                    filterable
                    v-model={this.isvalue}
                    placeholder="请选择查询方式">
                    <el-option label="全部" value="0"></el-option>
                    <el-option label="小程序" value="1"></el-option>
                    <el-option label="代客" value="2"></el-option>
                    <el-option label="引流" value="3"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-date-picker
                    v-model={this.value1}
                    class={style.Timezone}
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                  </el-date-picker>
                </el-form-item>

              </el-form>
            </div>
            <div class={style.results_from_right}>
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
          </div>
            :
            <div>
              <div class={style.results_from_header_top} >
                <div class={style.results_from_header_top_left}>
                  <div class={style.shaixuan}>
                    <icon-filter class={style.icon_filter} theme="outline" size="16" fill="#409EFF" />
                    <span>高级筛选</span>
                  </div>
                </div>
                <div class={style.results_from_header_top_right}>
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
              <div class={style.results_from_header_footer}>
                <el-form
                  size='mini'
                  inline={true}
                >
                  <el-form-item>
                    <el-select
                      filterable
                      v-model={this.isvalue}
                      placeholder="请选择订单类别">
                      <el-option label="退货单" value="0"></el-option>
                      <el-option label="零售单" value="1"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-select
                      filterable
                      v-model={this.isvalue}
                      placeholder="请选择查询方式">
                      <el-option label="全部" value="0"></el-option>
                      <el-option label="小程序" value="1"></el-option>
                      <el-option label="代客" value="2"></el-option>
                      <el-option label="引流" value="3"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-date-picker
                      v-model={this.value1}
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
      <div class={style.results_Table}>
        <div class={style.results_Table_header}>
          <datalistTableTitle
            props={{
              tableColumn: this.elTableColumn
            }}
            {
            ...{
              on: {
                'checkboxGroup': (item: any) => {
                  this.elTabletsxstripe = item.includes('斑马线')
                  this.elTabletsxborder = item.includes('边框')
                  if (this.elTabletsxstripe) {
                    this.elTabletsxoddnumber = 'background: rgb(238 250 255 / 80%);'
                    this.elTabletsxevennumber = 'background: rgb(238 250 255 / 30%);'
                    this.elTabletsxheaderBGS = "background: linear-gradient(to bottom, #EEF5FB 0%,#E2EDFA 100%);"
                  } else {
                    this.elTabletsxoddnumber = ''
                    this.elTabletsxevennumber = ''
                    this.elTabletsxheaderBGS = 'background:#F5F7FA;'
                  }
                },
                'radioGroup': (item: any) => {
                  if (item === 'mini') {
                    this.elTabletsxcellStyle = 'height:22px;padding:0px;font-size:13px;line-height: 22px;text-align: center;'
                    this.elTabletsxheadercellstyle = 'height:20px;padding:0px;text-align: center;'
                  } else if (item === 'small' || item === 'medium') {
                    this.elTabletsxcellStyle = 'text-align: center;'
                    this.elTabletsxheadercellstyle = 'text-align: center;'
                  }
                  this.elTabletsxsize = item
                },
              }
            }
            }
          >
          </datalistTableTitle>
        </div>
        <elTabletsx
          props={{
            data: this.tableData,
            border: this.elTabletsxborder,
            stripe: this.elTabletsxstripe,
            size: this.elTabletsxsize,
            tooltipEffect: "dark",
            serialnumber: true,
            elTableColumn: this.elTableColumn,
            stylecLIS: "border-radius: 5px;box-shadow: #ebeef5 0px 0px 13px;color:#515151;",
            cellStyle: ({ row, rowIndex }: any) => {
              var style = this.elTabletsxcellStyle
              if (rowIndex % 2 == 0) {
                style += this.elTabletsxoddnumber
              }
              if (rowIndex % 2 !== 0) {
                style += this.elTabletsxevennumber
              }
              return style
            },
            headercellstyle: () => {
              var style = this.elTabletsxheadercellstyle
              style += this.elTabletsxheaderBGS
              return style;
            },
            showpagination: true,
            total: 10
          }}
          scopedSlots={{
            Thecustom: (param: any) => {
              const item: any = param.isitem.row
              return <div>
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{item.name}</span>
              </div>
            },
            operation: (param: any) => {
              const item: any = param.isitem
              return <div>
                <el-button type="text" size="mini" onClick={this.onCheckthedetails.bind(this, item)}>随访详情</el-button>
                <el-button type="text" size="mini" onClick={this.onCheckthedetails.bind(this, item)}>详情</el-button>
              </div>
            }
          }}
        >
        </elTabletsx>
      </div>
      <div class={style.Popupwindow}>
        <eldialog
          props={{
            visibleSync: this.eldialogVsibleSync,
            Shutdown: () => {
              this.eldialogVsibleSync = false
            },
            title: '详情',
            iswidth: "680px"
          }}
          scopedSlots={{
            elcontentFK: () => {
              return <div class={style.eldialog_div}>
                <div class={style.eldialog_div_table}>
                  <elTabletsx
                    props={{
                      data: this.tableData,
                      border: true,
                      stripe: true,
                      size: 'mini',
                      tooltipEffect: "dark",
                      elTableColumn: this.detailsColumn,
                      maxHeight: 300,
                      stylecLIS: "border-radius: 5px;box-shadow: #ebeef5 0px 0px 13px;color:#515151;",
                      cellStyle: ({ row, rowIndex }: any) => {
                        var style = this.elTabletsxcellStyle
                        if (rowIndex % 2 == 0) {
                          style += this.elTabletsxoddnumber
                        }
                        if (rowIndex % 2 !== 0) {
                          style += this.elTabletsxevennumber
                        }
                        return style
                      },
                      headercellstyle: () => {
                        var style = this.elTabletsxheadercellstyle
                        style += this.elTabletsxheaderBGS
                        return style;
                      },
                      total: 50
                    }}
                    scopedSlots={{
                      Thecustom: (param: any) => {
                        const item: any = param.isitem.row
                        return <div>
                          <i class="el-icon-time"></i>
                          <span style="margin-left: 10px">{item.name}</span>
                        </div>
                      }
                    }}
                  >
                  </elTabletsx>
                </div>
              </div>
            },
            elfooterFK: () => {
              return <div>
                <el-button size='mini' onClick={this.onCancelPopupwindow.bind(this)} >关 闭</el-button>
              </div>
            }
          }}
        >
        </eldialog>
      </div>
    </div>
  }
}