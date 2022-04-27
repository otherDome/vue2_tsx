/**
 * @name Userspay
 * @author fankai16
 * @Time 2022/04/27
 * @property {string}  value1           时间区域变量
 * @property {boolean} elTabletsxborder 是否展示列表Border
 * @property {boolean} elTabletsxstripe 是否展示斑马线
 * @property {string}  elTabletsxsize   列表大小
 * @property {string}  elTabletsxcellStyle  列表行内样式
 * @property {string}  elTabletsxheadercellstyle  列表头部样式
 * @property {string}  elTabletsxoddnumber   列表奇数背景颜色
 * @property {string}  elTabletsxevennumber  列表偶数背景颜色
 * @property {string}  elTabletsxheaderBGS   列表头部背景颜色
 * @function onfollowup     -随访点击
 * 
 * @description 用户付费
 **/
import { Component, Mixins } from 'vue-property-decorator';
import style from '@/assets/styles/Theuser/Userspay.module.scss';
import { onresize } from '@/components/mixins/onresize';
import elTabletsx from '@/components/elementUItsx/eltabletsx/elTabletsx.vue'
import datalistTableTitle from '@/components/elementUItsx/eltabletsx/datalistTableTitle'
@Component({
  components: {
    elTabletsx,
    datalistTableTitle
  }
})
export default class Userspay extends Mixins(onresize) {
  $OnlyMessage: any
  $filters: any
  //临时变量
  protected value1: string = ''
  //临时变量
  protected tableData: any = [
    {
      hymc: "会员名称",
      hysjh: "15838888823",
      wxmc: "微信名称",
      wxtx: '',
      hydj: "黑金会员",
      hykssj: '2022-04-06 12:16:43',
      hyjssj: '2022-05-36 20:50:43',
      yqrmc: "小范药师@德开会员",
      bdysmc: '',
      bdsj: '',
      qywxbj: "未标记",
      qywxbjsj: "2022-05-36 20:50:43",
      hyblcs: '15',
      wzjl: '99',
      bgjdcs: '54',
      gyxxcs: '5'
    },
    {
      hymc: "会员名称",
      hysjh: "15838888888",
      wxmc: "微信名称",
      wxtx: '',
      hydj: "黑金会员",
      hykssj: '2022-04-06 12:16:43',
      hyjssj: '2022-05-36 20:50:43',
      yqrmc: "小范药师@德开会员",
      bdysmc: '小凡',
      bdsj: '2022-05-36 20:50:43',
      qywxbj: "未标记",
      qywxbjsj: "2022-05-36 20:50:43",
      hyblcs: '15',
      wzjl: '99',
      bgjdcs: '54',
      gyxxcs: '5'
    },
    {
      hymc: "会员名称",
      hysjh: "15838888888",
      wxmc: "微信名称",
      wxtx: '',
      hydj: "黑金会员",
      hykssj: '2022-04-06 12:16:43',
      hyjssj: '2022-05-36 20:50:43',
      yqrmc: "小范药师@德开会员",
      bdysmc: '',
      bdsj: '',
      qywxbj: "未标记",
      qywxbjsj: "2022-05-36 20:50:43",
      hyblcs: '15',
      wzjl: '99',
      bgjdcs: '54',
      gyxxcs: '5'
    },
    {
      hymc: "会员名称",
      hysjh: "15838888888",
      wxmc: "微信名称",
      wxtx: '',
      hydj: "黑金会员",
      hykssj: '2022-04-06 12:16:43',
      hyjssj: '2022-05-36 20:50:43',
      yqrmc: "小范药师@德开会员",
      bdysmc: '小凡',
      bdsj: '2022-05-36 20:50:43',
      qywxbj: "未标记",
      qywxbjsj: "2022-05-36 20:50:43",
      hyblcs: '15',
      wzjl: '99',
      bgjdcs: '54',
      gyxxcs: '5'
    }, {
      hymc: "会员名称",
      hysjh: "15838888888",
      wxmc: "微信名称",
      wxtx: '',
      hydj: "黑金会员",
      hykssj: '2022-04-06 12:16:43',
      hyjssj: '2022-05-36 20:50:43',
      yqrmc: "小范药师@德开会员",
      bdysmc: '',
      bdsj: '',
      qywxbj: "未标记",
      qywxbjsj: "2022-05-36 20:50:43",
      hyblcs: '15',
      wzjl: '99',
      bgjdcs: '54',
      gyxxcs: '5'
    },
    {
      hymc: "会员名称",
      hysjh: "15838888888",
      wxmc: "微信名称",
      wxtx: '',
      hydj: "黑金会员",
      hykssj: '2022-04-06 12:16:43',
      hyjssj: '2022-05-36 20:50:43',
      yqrmc: "小范药师@德开会员",
      bdysmc: '小凡',
      bdsj: '2022-05-36 20:50:43',
      qywxbj: "未标记",
      qywxbjsj: "2022-05-36 20:50:43",
      hyblcs: '15',
      wzjl: '99',
      bgjdcs: '54',
      gyxxcs: '5'
    }, {
      hymc: "会员名称",
      hysjh: "15838888888",
      wxmc: "微信名称",
      wxtx: '',
      hydj: "黑金会员",
      hykssj: '2022-04-06 12:16:43',
      hyjssj: '2022-05-36 20:50:43',
      yqrmc: "小范药师@德开会员",
      bdysmc: '',
      bdsj: '',
      qywxbj: "未标记",
      qywxbjsj: "2022-05-36 20:50:43",
      hyblcs: '15',
      wzjl: '99',
      bgjdcs: '54',
      gyxxcs: '5'
    },
    {
      hymc: "会员名称",
      hysjh: "15838888888",
      wxmc: "微信名称",
      wxtx: '',
      hydj: "黑金会员",
      hykssj: '2022-04-06 12:16:43',
      hyjssj: '2022-05-36 20:50:43',
      yqrmc: "小范药师@德开会员",
      bdysmc: '小凡',
      bdsj: '2022-05-36 20:50:43',
      qywxbj: "未标记",
      qywxbjsj: "2022-05-36 20:50:43",
      hyblcs: '15',
      wzjl: '99',
      bgjdcs: '54',
      gyxxcs: '5'
    }, {
      hymc: "会员名称",
      hysjh: "15838888888",
      wxmc: "微信名称",
      wxtx: '',
      hydj: "黑金会员",
      hykssj: '2022-04-06 12:16:43',
      hyjssj: '2022-05-36 20:50:43',
      yqrmc: "小范药师@德开会员",
      bdysmc: '',
      bdsj: '',
      qywxbj: "未标记",
      qywxbjsj: "2022-05-36 20:50:43",
      hyblcs: '15',
      wzjl: '99',
      bgjdcs: '54',
      gyxxcs: '5'
    },
    {
      hymc: "会员名称",
      hysjh: "15838888888",
      wxmc: "微信名称",
      wxtx: '',
      hydj: "黑金会员",
      hykssj: '2022-04-06 12:16:43',
      hyjssj: '2022-05-36 20:50:43',
      yqrmc: "小范药师@德开会员",
      bdysmc: '小凡',
      bdsj: '2022-05-36 20:50:43',
      qywxbj: "未标记",
      qywxbjsj: "2022-05-36 20:50:43",
      hyblcs: '15',
      wzjl: '99',
      bgjdcs: '54',
      gyxxcs: '5'
    }, {
      hymc: "会员名称",
      hysjh: "15838888888",
      wxmc: "微信名称",
      wxtx: '',
      hydj: "黑金会员",
      hykssj: '2022-04-06 12:16:43',
      hyjssj: '2022-05-36 20:50:43',
      yqrmc: "小范药师@德开会员",
      bdysmc: '',
      bdsj: '',
      qywxbj: "未标记",
      qywxbjsj: "2022-05-36 20:50:43",
      hyblcs: '15',
      wzjl: '99',
      bgjdcs: '54',
      gyxxcs: '5'
    },
    {
      hymc: "会员名称",
      hysjh: "15838888888",
      wxmc: "微信名称",
      wxtx: '',
      hydj: "黑金会员",
      hykssj: '2022-04-06 12:16:43',
      hyjssj: '2022-05-36 20:50:43',
      yqrmc: "小范药师@德开会员",
      bdysmc: '小凡',
      bdsj: '2022-05-36 20:50:43',
      qywxbj: "未标记",
      qywxbjsj: "2022-05-36 20:50:43",
      hyblcs: '15',
      wzjl: '99',
      bgjdcs: '54',
      gyxxcs: '5'
    }, {
      hymc: "会员名称",
      hysjh: "15838888888",
      wxmc: "微信名称",
      wxtx: '',
      hydj: "黑金会员",
      hykssj: '2022-04-06 12:16:43',
      hyjssj: '2022-05-36 20:50:43',
      yqrmc: "小范药师@德开会员",
      bdysmc: '',
      bdsj: '',
      qywxbj: "未标记",
      qywxbjsj: "2022-05-36 20:50:43",
      hyblcs: '15',
      wzjl: '99',
      bgjdcs: '54',
      gyxxcs: '5'
    },
    {
      hymc: "会员名称",
      hysjh: "15838888888",
      wxmc: "微信名称",
      wxtx: '',
      hydj: "黑金会员",
      hykssj: '2022-04-06 12:16:43',
      hyjssj: '2022-05-36 20:50:43',
      yqrmc: "小范药师@德开会员",
      bdysmc: '小凡',
      bdsj: '2022-05-36 20:50:43',
      qywxbj: "未标记",
      qywxbjsj: "2022-05-36 20:50:43",
      hyblcs: '15',
      wzjl: '99',
      bgjdcs: '54',
      gyxxcs: '5'
    }, {
      hymc: "会员名称",
      hysjh: "15838888888",
      wxmc: "微信名称",
      wxtx: '',
      hydj: "黑金会员",
      hykssj: '2022-04-06 12:16:43',
      hyjssj: '2022-05-36 20:50:43',
      yqrmc: "小范药师@德开会员",
      bdysmc: '',
      bdsj: '',
      qywxbj: "未标记",
      qywxbjsj: "2022-05-36 20:50:43",
      hyblcs: '15',
      wzjl: '99',
      bgjdcs: '54',
      gyxxcs: '5'
    },
    {
      hymc: "会员名称",
      hysjh: "15838888888",
      wxmc: "微信名称",
      wxtx: '',
      hydj: "黑金会员",
      hykssj: '2022-04-06 12:16:43',
      hyjssj: '2022-05-36 20:50:43',
      yqrmc: "小范药师@德开会员",
      bdysmc: '小凡',
      bdsj: '2022-05-36 20:50:43',
      qywxbj: "未标记",
      qywxbjsj: "2022-05-36 20:50:43",
      hyblcs: '15',
      wzjl: '99',
      bgjdcs: '54',
      gyxxcs: '5'
    }, {
      hymc: "会员名称",
      hysjh: "15838888888",
      wxmc: "微信名称",
      wxtx: '',
      hydj: "黑金会员",
      hykssj: '2022-04-06 12:16:43',
      hyjssj: '2022-05-36 20:50:43',
      yqrmc: "小范药师@德开会员",
      bdysmc: '',
      bdsj: '',
      qywxbj: "未标记",
      qywxbjsj: "2022-05-36 20:50:43",
      hyblcs: '15',
      wzjl: '99',
      bgjdcs: '54',
      gyxxcs: '5'
    },
  ];
  protected elTableColumn: any = [
    {
      label: "会员用户名称",
      minwidth: '120',
      prop: "hymc",
      showOverflowTooltip: true,
      showtableColumn: true
    }, {
      type: "Thecustom",
      label: "会员用户手机号",
      width: "120",
      prop: "hysjh",
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
      label: "微信名称",
      minwidth: '85',
      prop: "wxmc",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      type: "Thecustom",
      label: "微信头像",
      minwidth: '85',
      prop: "wxtx",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "会员等级",
      minwidth: '85',
      prop: "hydj",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "会员开始时间",
      minwidth: '170',
      prop: "hykssj",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "会员结束时间",
      minwidth: '170',
      prop: "hyjssj",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "邀请人名称",
      minwidth: '150',
      prop: "yqrmc",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      type: "Thecustom",
      label: "绑定药师名称",
      minwidth: '100',
      prop: "bdysmc",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "绑定时间",
      minwidth: '150',
      prop: "bdsj",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "企业微信标记",
      minwidth: '100',
      prop: "qywxbj",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "企业微信标记时间",
      minwidth: '120',
      prop: "qywxbjsj",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      type: "Thecustom",
      label: "会员办理次数",
      minwidth: '100',
      prop: "hyblcs",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      type: "Thecustom",
      label: "问诊记录",
      minwidth: '85',
      prop: "wzjl",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "报告解读次数",
      minwidth: '100',
      prop: "bgjdcs",
      showOverflowTooltip: true,
      showtableColumn: true
    }, {
      label: "购药信息次数",
      minwidth: '100',
      prop: "gyxxcs",
      showOverflowTooltip: true,
      showtableColumn: true
    },
    {
      label: "操作",
      type: "operation",
      minwidth: '100',
      fixed: "right",
      prop: "",
      showOverflowTooltip: true,
      showtableColumn: true
    },
  ]
  protected value: String = ''
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
  protected render() {
    return <div class={style.Userspay}>
      <div class={[style.Userspay_from, style.Userspaymax680]} id='elFromwidth'>
        <div class={style.Userspay_from_left}>
          <el-form
            size='mini'
            inline={true}
          >
            <el-form-item>
              <el-input
                placeholder="请输入微信名称"
              ></el-input>
            </el-form-item>
            {
              this.elFromwidth > 645 ?
                <el-form-item>
                  <el-input
                    placeholder="请输入会员手机号"
                  ></el-input>
                </el-form-item>
                : ''
            }
            {
              this.elFromwidth > 835 ?
                <el-form-item>
                  <el-input
                    placeholder="请输入负责人名称"
                  ></el-input>
                </el-form-item>
                : ''
            }
            {
              this.elFromwidth > 1193 ?
                <el-form-item>
                  <el-date-picker
                    v-model={this.value1}
                    class={style.Timezone}
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                  </el-date-picker>
                </el-form-item> : ''
            }
          </el-form>
        </div>
        <div class={style.Userspay_from_right}>
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
      <div class={[style.Userspay_from, style.Userspaymin680]}>
        手机端
      </div>
      <div class={[style.Userspay_table, style.Userspaymax680]}>
        <div class={style.Userspay_table_title}>
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
            total: 150
          }}
          scopedSlots={{
            Thecustom: (param: any) => {
              const column: any = param.isitem.column
              const item: any = param.isitem.row
              let isNewHtml: any = ''
              if (column.property === 'hysjh') {
                isNewHtml = <div>
                  <el-tag size='mini' class={style.Userspay_table_sjh} type="info">{this.$filters.phonezz(item.hysjh)}</el-tag>
                </div>
              }
              if (column.property === 'wxtx') {
                isNewHtml = <div>
                  <el-image
                    class={style.Userspay_table_elImage}
                    src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                    preview-src-list={['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg']}
                  >
                  </el-image>
                </div>
              }
              if (column.property === 'bdysmc') {
                isNewHtml = <div class={style.Userspay_table_yqrmc}>
                  {
                    item.bdysmc === '' || item.bdysmc === null || item.bdysmc === undefined ?
                      <el-popover
                        placement="right"
                        width="150"
                        trigger="click">
                        <div class={style.Userspay_table_body}>
                          <p class="Userspay_table_body_H1"><i class="el-icon-edit-outline"></i>绑定员工</p>
                          <el-select v-model={this.value} size='mini' placeholder="请选择">
                            <el-option
                              label="员工1"
                              value="0">
                            </el-option>
                            <el-option
                              label="员工2"
                              value="1">
                            </el-option>
                            <el-option
                              label="员工3"
                              value="2">
                            </el-option>
                          </el-select>
                          <el-button class='Userspay_table_body_mainistop' size='mini' type="success">保存</el-button>
                        </div>
                        <el-tag slot="reference" size='mini' class={style.Userspay_table_tag} type='danger'>绑定</el-tag>
                      </el-popover>
                      :
                      item.bdysmc
                  }
                </div>
              }
              if (column.property === 'hyblcs') {
                isNewHtml = <div class={style.Userspay_table_red}>
                  1
                </div>
              }
              if (column.property === 'wzjl') {
                isNewHtml = <div class={style.Userspay_table_green}>
                  16
                </div>
              }
              return isNewHtml
            },
            operation: (param: any) => {
              const item: any = param.isitem
              return <div>
                <el-popconfirm
                  title="您确定微信标记吗？"
                  {...{
                    on: {
                      confirm: () => {
                        this.$OnlyMessage.success('标记成功');
                      }
                    }
                  }}
                >
                  <el-button type="text" size="mini" slot="reference" class={style.lock}>微信标记</el-button>
                </el-popconfirm>
              </div>
            }
          }}
        >

        </elTabletsx>
      </div>
      <div class={[style.Userspay_table, style.Userspaymin680]}>
        用户付费手机端
      </div>
    </div>
  }
}