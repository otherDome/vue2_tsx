/**
 * @name kehuzhuizong
 * @author fankai16
 * @Time 2022/04/20
 * @property {number}  elFromwidth  这是usinof 的元素宽度
 * @property {any}  Widthtimer  这是节流
 * @property {boolean} eldialogVsibleSync  弹窗详情
 * @function onCheckthedetails  详情弹窗
 * @description 客户追踪
 **/
import { Component, Mixins } from 'vue-property-decorator';
import style from '@/assets/styles/Theuser/kehuzhuizong.module.scss';
import datalistTableTitle from '@/components/elementUItsx/eltabletsx/datalistTableTitle'
import eldialog from '@/components/elementUItsx/eldialog/eldialog.vue'
import elTabletsx from '@/components/elementUItsx/eltabletsx/elTabletsx.vue'
import { onresize } from '@/components/mixins/onresize';
@Component({
  components: {
    datalistTableTitle,
    elTabletsx,
    eldialog
  }
})
export default class kehuzhuizong extends Mixins(onresize) {
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
    }, {
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
      sortable: true,
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数2",
      minwidth: '85',
      prop: "amount2",
      sortable: true,
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数3",
      minwidth: '85',
      prop: "amount3",
      sortable: true,
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数4",
      minwidth: '85',
      prop: "amount4",
      sortable: true,
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数5",
      minwidth: '85',
      prop: "amount5",
      sortable: true,
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数5",
      minwidth: '85',
      prop: "amount6",
      sortable: true,
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数6",
      minwidth: '85',
      prop: "amount7",
      sortable: true,
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数7",
      minwidth: '85',
      prop: "amount8",
      sortable: true,
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数8",
      minwidth: '85',
      prop: "amount9",
      sortable: true,
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数9",
      minwidth: '85',
      prop: "amount9",
      sortable: true,
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数10",
      minwidth: '95',
      prop: "amount10",
      sortable: true,
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数11",
      minwidth: '95',
      prop: "amount11",
      sortable: true,
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数12",
      minwidth: '95',
      prop: "amount12",
      sortable: true,
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "参数13",
      minwidth: '95',
      prop: "amount13",
      sortable: true,
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      type: "operation",
      minwidth: '80',
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
  protected onCheckthedetails(item: any) {
    this.eldialogVsibleSync = true
    console.log("点击详情获取的数据", item)
    console.log("点击详情获取的数据eldialogVsibleSync", this.eldialogVsibleSync)
  }
  protected onCancelPopupwindow() {
    this.eldialogVsibleSync = false
  }
  //表格设置数据变量
  protected elTabletsxborder: boolean = true
  protected elTabletsxstripe: boolean = true
  protected elTabletsxsize: String = 'mini'
  protected elTabletsxcellStyle: string = 'height:22px;padding:0px;font-size:13px;line-height: 22px;text-align: center;'
  protected elTabletsxheadercellstyle: string = 'height:20px;padding:0px;text-align: center;'
  protected elTabletsxoddnumber: string = 'background: rgb(238 250 255 / 80%);'
  protected elTabletsxevennumber: string = 'background: rgb(238 250 255 / 30%);'
  protected elTabletsxheaderBGS: string = "background: linear-gradient(to bottom, #EEF5FB 0%,#E2EDFA 100%);"

  protected created() {
    this.onOnreSize('elFromwidth')
  }
  protected mounted() {
    this.onresizeInit('elFromwidth')
  }
  protected render() {
    return <div class={style.kehuzhuizong}>
      <div class={[style.kehuzhuizong_header, style.kehuzhuizong_header_min850]} id='elFromwidth'>
        <div class={style.kehuzhuizong_header_l}>
          <el-form
            size='mini'
            inline={true}
          >
            <el-form-item>
              <el-input
                placeholder="请输入客户姓名,手机号"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                placeholder="请选择微信状态"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-checkbox size='mini' label="备选项1" border></el-checkbox>
            </el-form-item>
          </el-form>
        </div>
        <div class={style.kehuzhuizong_header_r}>
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
        </div>
      </div>
      <div class={[style.kehuzhuizong_header, style.kehuzhuizong_header_max850]} >
        这是手机端搜索
      </div>
      <div class={[style.kehuzhuizong_table, style.kehuzhuizong_header_min850]}>
        <elTabletsx
          props={{
            data: this.tableData,
            border: this.elTabletsxborder,
            stripe: this.elTabletsxstripe,
            size: this.elTabletsxsize,
            tooltipEffect: "dark",
            selection: true,
            serialnumber: true,
            elTableColumn: this.elTableColumn,
            showSummary: true,
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
            total: 50
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
                <el-button type="text" onClick={this.onCheckthedetails.bind(this, item)} size="mini" class="btmmini">详情</el-button>
              </div>
            }
          }}
        >
        </elTabletsx>
      </div>
      <div class={[style.kehuzhuizong_table, style.kehuzhuizong_header_max850]}>
        这事手机端数据列表
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