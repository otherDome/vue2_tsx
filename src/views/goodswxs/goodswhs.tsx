
/**
 * @name goodswhs
 * @author fankai16
 * @Time 2022/05/05
 * @property {string}  value1           时间区域变量
 * @property {boolean} screening   这是打开高级或者基础
 * @property {boolean} eldialogVsibleSync  弹窗详情
 * @property {boolean} elTabletsxborder 是否展示列表Border
 * @property {boolean} elTabletsxstripe 是否展示斑马线
 * @property {string}  elTabletsxsize   列表大小
 * @property {string}  elTabletsxcellStyle  列表行内样式
 * @property {string}  elTabletsxheadercellstyle  列表头部样式
 * @property {string}  elTabletsxoddnumber   列表奇数背景颜色
 * @property {string}  elTabletsxevennumber  列表偶数背景颜色
 * @property {string}  elTabletsxheaderBGS   列表头部背景颜色
 * @function onTheeditor -操作编辑或者维护
 * @description 商品维护
 **/
import { Component, Mixins } from 'vue-property-decorator';
import style from '@/assets/styles/goodswxs/goodswhs.module.scss';
import { onresize } from '@/components/mixins/onresize';
import elTabletsx from '@/components/elementUItsx/eltabletsx/elTabletsx.vue'
import datalistTableTitle from '@/components/elementUItsx/eltabletsx/datalistTableTitle'
@Component({
  components: {
    elTabletsx,
    datalistTableTitle
  }
})
export default class goodswhs extends Mixins(onresize) {
  //临时变量开始
  protected value: string = ''
  protected value1: string = ''
  protected value2: string = ''
  //临时变量开始结束
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
    }, {
      type: "operation",
      minwidth: '150',
      label: "操作",
      prop: "",
      fixed: "right",
      showtableColumn: true
    }
  ]
  //表格设置数据变量
  protected elTabletsxborder: boolean = true
  protected elTabletsxstripe: boolean = true
  protected elTabletsxsize: String = 'mini'
  protected elTabletsxcellStyle: string = 'height:28px;padding:0px;font-size:13px;line-height: 28px;text-align: center;'
  protected elTabletsxheadercellstyle: string = 'height:28px;padding:0px;text-align: center;'
  protected elTabletsxoddnumber: string = 'background: rgb(238 250 255 / 80%);'
  protected elTabletsxevennumber: string = 'background: rgb(238 250 255 / 30%);'
  protected elTabletsxheaderBGS: string = "background: linear-gradient(to bottom, #EEF5FB 0%,#E2EDFA 100%);"

  protected created() {
    this.onOnreSize('elFromwidth')
  }
  protected mounted() {
    this.onresizeInit('elFromwidth')
  }
  protected onTheeditor(type: string) {
    if (type === 'Theeditor') {
      console.log('编辑')
    } else if (type === 'maintenance') {
      console.log('疾病维护')
    }
  }
  protected render() {
    return <div class={style.goodswhs}>
      <div class={style.goodswhs_form} id='elFromwidth'>
        <div class={style.goodswhs_form_left}>
          <el-form
            size='mini'
            inline={true}
          >
            <el-form-item>
              <el-input v-model={this.value} size='mini' placeholder="请输入商品编码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-select
                filterable
                v-model={this.value1}
                placeholder="请选择维护状态">
                <el-option label="一个月" value="0"></el-option>
                <el-option label="二个月" value="1"></el-option>
                <el-option label="三个月" value="2"></el-option>
                <el-option label="四个月" value="3"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-input v-model={this.value2} size='mini' placeholder="请输入商品类别"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class={[style.goodswhs_form_right, style.goodswhs_formMax910]}>
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
      <div class={style.goodswhs_table}>
        <div class={style.goodswhs_table_header}>
          <div class={[style.goodswhs_table_header_isbtn, style.goodswhs_formMin910]}>
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

          <el-button class={style.goodswhs_table_header_dc} size='mini' type="success" icon='el-icon-download'>导出</el-button>
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
                <el-button
                  onClick={this.onTheeditor.bind(this, item, 'Theeditor')}
                  icon='el-icon-edit-outline'
                  type="text"
                  size="mini"
                >编辑</el-button>
                <el-button
                  onClick={this.onTheeditor.bind(this, item, 'maintenance')}
                  icon='el-icon-edit-outline'
                  type="text"
                  size="mini"
                >疾病维护</el-button>
              </div>
            }
          }}

        >
        </elTabletsx>
      </div>

    </div>
  }
}