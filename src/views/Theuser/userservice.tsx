/**
 * @name userservice
 * @author fankai16
 * @Time 2022/04/20
 * @property {number}  elFromwidth  这是usinof 的元素宽度
 * @property {any}  Widthtimer  这是节流
 * @property {boolean} eldialogVsibleSync  弹窗详情
 * @property {boolean} screening   这是打开高级或者基础
 * @property {arr}  tableData    数据列表数据
 * @property {arr}  elTableColumn  数据表格列表
 * @property {arr}  detailsColumn  购药概况临时数组
 * @property {boolean} elTabletsxborder 是否展示列表Border
 * @property {boolean} elTabletsxstripe 是否展示斑马线
 * @property {string}  elTabletsxsize   列表大小
 * @property {string}  elTabletsxcellStyle  列表行内样式
 * @property {string}  elTabletsxheadercellstyle  列表头部样式
 * @property {string}  elTabletsxoddnumber   列表奇数背景颜色
 * @property {string}  elTabletsxevennumber  列表偶数背景颜色
 * @property {string}  elTabletsxheaderBGS   列表头部背景颜色
 * @property {boolean} LockingMember         锁定会员弹窗
 * @property {boolean} information           会员综合信息
 * @property {string}  activeName            选项卡
 * @property {Array}   ComprehensiveinofNamv  综合信息导航列表
 * @property {Array}   genderList            性别列表
 * @property {string}  genderMod             已选性别列表
 * @property {booler}  Newaddyl              新增弹窗
 * @function onCheckthedetails  详情弹窗
 * @function onScreeningClk -点击展开高级筛选初级筛选
 * @function onOnreSize      获取指定元素的宽度
 * @function oncomprehensive   点击综合信息
 * @function oninformatmembership  会员资料保存
 * @function onNewaddyl        新增电子药理
 * @description 用户服务 《首付人生》
 **/
import { Component, Mixins } from 'vue-property-decorator';
import style from '@/assets/styles/Theuser/userservice.module.scss';
import { onresize } from '@/components/mixins/onresize';
import datalistTableTitle from '@/components/elementUItsx/eltabletsx/datalistTableTitle'
import elTabletsx from '@/components/elementUItsx/eltabletsx/elTabletsx.vue'
import eldialog from '@/components/elementUItsx/eldialog/eldialog.vue'
import { genderList, ComprehensiveinofNamv } from '@/assets/model/userserviceTsType'
@Component({
  components: {
    datalistTableTitle,
    elTabletsx,
    eldialog
  }
})
export default class userservice extends Mixins(onresize) {
  $OnlyMessage: any;
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
      minwidth: '150',
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
  protected ComprehensiveinofNamv: Array<ComprehensiveinofNamv> = [
    {
      lable: "会员资料",
      key: 'hyzl'
    },
    {
      lable: "购药情况",
      key: 'gyqk'
    },
    {
      lable: "地址本",
      key: 'dzb'
    },
    {
      lable: "回复历史",
      key: 'hfls'
    },
    {
      lable: "电子药历",
      key: 'dzyl'
    }
  ]
  protected genderList: Array<genderList> = [
    {
      key: '0',
      name: '未知'
    },
    {
      key: '1',
      name: '男',
    },
    {
      key: '1',
      name: '女',
    }
  ]
  protected genderMod: string = '0'
  protected isvalue: string = ''
  protected screening: boolean = false
  protected LockingMember: boolean = false
  protected oninformation: boolean = false
  protected activeName: string = 'hyzl'
  protected Newaddyl: boolean = false
  //表格设置数据变量
  protected elTabletsxborder: boolean = true
  protected elTabletsxstripe: boolean = true
  protected elTabletsxsize: String = 'mini'
  protected elTabletsxcellStyle: string = 'height:28px;padding:0px;font-size:13px;line-height: 28px;text-align: center;'
  protected elTabletsxheadercellstyle: string = 'height:28px;padding:0px;text-align: center;'
  protected elTabletsxoddnumber: string = 'background: rgb(238 250 255 / 80%);'
  protected elTabletsxevennumber: string = 'background: rgb(238 250 255 / 30%);'
  protected elTabletsxheaderBGS: string = "background: linear-gradient(to bottom, #EEF5FB 0%,#E2EDFA 100%);"
  protected onScreeningClk() {
    this.screening = !this.screening
  }
  protected created() {
    this.onOnreSize('elFromwidth')
  }
  protected mounted() {
    this.onresizeInit('elFromwidth')
  }
  protected onLockingMember() {
    this.LockingMember = !this.LockingMember
  }
  protected oncomprehensive() {
    this.oninformation = !this.oninformation
  }
  protected oninformatmembership() {
    this.oninformation = false
  }
  protected onNewaddyl() {
    this.Newaddyl = !this.Newaddyl
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
                  label-width='68px'
                  inline={true}
                >
                  <el-form-item label="会员信息">
                    <el-input
                      class={style.userservice_elfrom_header_b_widt}
                      placeholder="请输入会员姓名/手机号"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="商品名称">
                    <el-input
                      class={style.userservice_elfrom_header_b_widt}
                      placeholder="请输入商品名称"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="时间类别">
                    <el-select
                      class={style.userservice_elfrom_header_b_widt}
                      filterable
                      v-model={this.isvalue}
                      placeholder="请选择时间类别">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="是否回访">
                    <el-select
                      class={style.userservice_elfrom_header_b_widt}
                      filterable
                      v-model={this.isvalue}
                      placeholder="请选择是否回访">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="锁定人">
                    <el-input
                      class={style.userservice_elfrom_header_b_widt}
                      placeholder="请输入锁定人"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="商品类别">
                    <el-select
                      filterable
                      class={style.userservice_elfrom_header_b_widt}
                      v-model={this.isvalue}
                      placeholder="请选择商品类别">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="微信用户">
                    <el-select
                      filterable
                      class={style.userservice_elfrom_header_b_widt}
                      v-model={this.isvalue}
                      placeholder="请选择微信用户">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="药师微信">
                    <el-input
                      class={style.userservice_elfrom_header_b_widt}
                      placeholder="请输入微信号"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="时间区间">
                    <el-date-picker
                      class={style.userservice_elfrom_header_b_widt200}
                      default-time="['00:00:00', '23:59:59']"
                      format="yyyy-MM-dd HH:mm:ss"
                      value-format="yyyy-MM-dd HH:mm:ss"
                      type="datetimerange"
                      range-separator="至"
                      start-placeholder="查询开始时间"
                      end-placeholder="查询结束时间"></el-date-picker>
                  </el-form-item>
                </el-form>
              </div>
            </div>
        }
      </div>
      <div class={[style.userservice_elfrom, style.userservice_elfrommax850]}>
        这是手机端
      </div>
      <div class={[style.userservice_tables]}>
        <div class={style.userservice_tables_header}>
          <div class={style.userservice_tables_header_left}>
            <h1 class={style.userservice_tables_header_leftH1}>
              <span class={style.margin_right}>会员详情列表</span>
              <i class={['el-icon-success', style.SIclaoer_67C23A]}></i>
              <span class={style.margin_const}>已回访</span>
              <i class={['el-icon-warning', style.Siclaoer_909399]}></i>
              <span>未回访</span>
            </h1>
          </div>
          <div class={style.userservice_tables_header_right}>
            <el-button
              class={style.serservice_tables_header_right_marg}
              size='mini'
              icon="el-icon-refresh-right"
              type="success"
              onClick={this.onLockingMember.bind(this)}
            >锁定会员</el-button>
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
        </div>
        <div class={style.userservice_tables_footer}>
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
                  <el-button type="text" size="mini" onClick={this.oncomprehensive.bind(this)} class={style.comprehensive}>综合信息</el-button>
                  <el-popconfirm
                    title="您确定锁定为死粉吗？"
                    {...{
                      on: {
                        confirm: () => {
                          this.$OnlyMessage.success('锁定成功');
                        }
                      }
                    }}
                  >
                    <el-button type="text" size="mini" slot="reference" class={style.lock}>锁定死粉</el-button>
                  </el-popconfirm>
                </div>
              }
            }}
          >

          </elTabletsx>
        </div>
      </div>
      <div class={style.LockingMember}>
        <eldialog
          props={{
            visibleSync: this.LockingMember,
            Shutdown: () => {
              this.LockingMember = false
            },
            title: '锁定会员',
            iswidth: "680px"
          }}
          scopedSlots={{
            elcontentFK: () => {
              return <div class={style.LockingMember_eldialog}>
                <div class={style.LockingMember_eldialog_search}>
                  <el-descriptions
                    props={{
                      column: 2
                    }}
                    border>
                    <el-descriptions-item label="会员手机号">
                      <el-input size='mini' placeholder="请输入要搜索的手机号"></el-input>
                    </el-descriptions-item>
                    <el-descriptions-item label="会员名称">搜索名字</el-descriptions-item>
                    <el-descriptions-item label="锁定状态">搜索锁定状态</el-descriptions-item>
                    <el-descriptions-item label="锁定时间">搜索锁定时间</el-descriptions-item>
                  </el-descriptions>
                </div>
              </div>
            },
            elfooterFK: () => {
              return <div>
                <el-button icon='el-icon-search' size='mini' type="success">保存</el-button>
                <el-button icon='el-icon-refresh' size='mini' type="warning">重置</el-button>
              </div>
            }
          }}
        >
        </eldialog>
      </div>
      <div class={style.information}>
        <eldialog
          props={{
            visibleSync: this.oninformation,
            Shutdown: () => {
              this.oninformation = false
            },
            title: '会员综合信息',
            iswidth: "930px"
          }}
          scopedSlots={{
            elcontentFK: () => {
              return <div class={style.informationeldialog}>
                <div class={style.informationeldialogtabs}>
                  <el-tabs
                    v-model={this.activeName}
                    props={{
                      beforeLeave: (tab: string) => {
                        console.log(tab);
                      }
                    }}>
                    {
                      this.ComprehensiveinofNamv.map((item: ComprehensiveinofNamv, index: Number) => {
                        return (
                          <el-tab-pane label={item.lable} name={item.key} key={index}></el-tab-pane>
                        )
                      })}
                  </el-tabs>
                </div>
                {
                  //会员资料开始
                }
                {
                  this.activeName === 'hyzl' ?
                    <div class={style.informatmembership}>
                      <el-descriptions
                        props={{
                          column: 3,
                        }}
                        size="mini"
                        border>
                        <el-descriptions-item>
                          <template slot="label">
                            <div class={style.informatmembershipLabel}>
                              <span>*</span>用户来源
                            </div>
                          </template>
                          <el-input
                            class={style.el_width}
                            size='mini'
                            placeholder="请输入内容"
                            disabled>
                          </el-input>
                        </el-descriptions-item>
                        <el-descriptions-item>
                          <template slot="label">
                            <div class={style.informatmembershipLabel}>
                              <span>*</span>会员姓名
                            </div>
                          </template>
                          <el-input
                            class={style.el_width}
                            size='mini'
                            placeholder="请输入会员姓名"
                          >
                          </el-input>
                        </el-descriptions-item>
                        <el-descriptions-item>
                          <template slot="label">
                            <div class={style.informatmembershipLabel}>
                              <span>*</span>性别
                            </div>
                          </template>
                          <el-select placeholder="请选择"
                            v-model={this.genderMod}
                            size='mini'
                            class={style.el_width}
                          >
                            {
                              this.genderList.map((item: genderList, index: Number) => {
                                return (
                                  <el-option
                                    key={index}
                                    label={item.name}
                                    value={item.key}>
                                  </el-option>
                                )
                              })}
                          </el-select>
                        </el-descriptions-item>
                        <el-descriptions-item>
                          <template slot="label">
                            <div class={style.informatmembershipLabel}>
                              <span>*</span>出生日期
                            </div>
                          </template>
                          <el-date-picker
                            type="date"
                            size='mini'
                            class={style.el_width}
                            placeholder="选择日期">
                          </el-date-picker>
                        </el-descriptions-item>
                        <el-descriptions-item>
                          <template slot="label">
                            <div class={style.informatmembershipLabel}>
                              创建日期
                            </div>
                          </template>
                          <el-date-picker
                            type="date"
                            size='mini'
                            disabled
                            class={style.el_width}
                            placeholder="选择日期">
                          </el-date-picker>
                        </el-descriptions-item>
                        <el-descriptions-item>
                          <template slot="label">
                            <div class={style.informatmembershipLabel}>
                              会员ID
                            </div>
                          </template>
                          <el-input
                            class={style.el_width}
                            size='mini'
                            placeholder="请输入内容"
                            disabled>
                          </el-input>
                        </el-descriptions-item>
                        <el-descriptions-item>
                          <template slot="label">
                            <div class={style.informatmembershipLabel}>
                              <span>*</span>手机号
                            </div>
                          </template>
                          <el-input
                            class={style.el_width}
                            size='mini'
                            placeholder="请输入会员姓名"
                          >
                          </el-input>
                        </el-descriptions-item>
                        <el-descriptions-item>
                          <template slot="label">
                            <div class={style.informatmembershipLabel}>
                              备注
                            </div>
                          </template>
                          <el-input
                            size='mini'
                            type="text"
                            placeholder="请输入内容"
                            maxlength="10"
                            show-word-limit
                          >
                          </el-input>
                        </el-descriptions-item>
                      </el-descriptions>
                    </div>
                    : ''
                }
                {
                  //购药情况
                }
                {
                  this.activeName === 'gyqk' ?
                    <div class={style.Tobuymedicine}>
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
                    : ''
                }
                {
                  //地址本
                }
                {
                  this.activeName === 'dzb' ?
                    <div class={style.Tobuymedicine}>
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
                    : ''
                }
                {
                  //回复历史
                }
                {
                  this.activeName === 'hfls' ?
                    <div class={style.Tobuymedicine}>
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
                    : ''
                }
                {
                  //电子药历
                }
                {
                  this.activeName === 'dzyl' ?
                    <div class={style.medicine}>
                      <div class={style.medicine_header}>
                        <div class={style.medicine_header_left}>
                          <el-button size='mini' type="primary">电子病历</el-button>
                          <el-button size='mini' type="success">电子药历</el-button>
                        </div>
                      </div>
                      <div class={style.medicine_footer}>
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
                    : ''
                }
              </div>
            },
            elfooterFK: () => {
              return <div>
                {
                  //会员资料按钮
                  this.activeName === 'hyzl' ?
                    <div>
                      <el-button onClick={this.oninformatmembership.bind(this)} size='mini' type="primary">保存</el-button>
                    </div>
                    : ''
                }
                {
                  //会员购药情况
                }
                {
                  this.activeName === 'gyqk' || this.activeName === 'dzb' || this.activeName === 'hfls' ?
                    <div>
                      <el-button onClick={this.oncomprehensive.bind(this)} size='mini' type="primary">关闭</el-button>
                    </div>
                    :
                    ''
                }
                {
                  this.activeName === 'dzyl' ?
                    <div><el-button size='mini' onClick={this.onNewaddyl.bind(this)} type="primary">新增</el-button> </div>
                    : ''
                }
              </div>
            }
          }}
        >
        </eldialog>
      </div>
      <div class={style.addyaoli}>
        <eldialog
          props={{
            visibleSync: this.Newaddyl,
            Shutdown: () => {
              this.Newaddyl = false
            },
            title: '添加',
            iswidth: "700px"
          }}
          scopedSlots={{
            elcontentFK: () => {
              return <div class={style.addyaoli}>
                <el-descriptions
                  props={{
                    column: 2,
                  }}
                  size="mini"
                  border>
                  <el-descriptions-item>
                    <template slot="label">
                      <div class={style.informatmembershipLabel}>
                        <span>*</span>购药人关系
                      </div>
                    </template>
                    <el-input
                      class={style.el_width}
                      size='mini'
                      placeholder="请输入内容"
                    >
                    </el-input>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label">
                      <div class={style.informatmembershipLabel}>
                        <span>*</span>药物治疗反馈
                      </div>
                    </template>
                    <el-input
                      class={style.el_width}
                      size='mini'
                      placeholder="请输入内容"
                    >
                    </el-input>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label">
                      <div class={style.informatmembershipLabel}>
                        <span>*</span>曾用药方案
                      </div>
                    </template>
                    <el-input
                      class={style.el_width}
                      size='mini'
                      placeholder="请输入内容"
                    >
                    </el-input>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label">
                      <div class={style.informatmembershipLabel}>
                        <span>*</span>现联合用药
                      </div>
                    </template>
                    <el-input
                      class={style.el_width}
                      size='mini'
                      placeholder="请输入内容"
                    >
                    </el-input>
                  </el-descriptions-item>
                  <el-descriptions-item>
                    <template slot="label">
                      <div class={style.informatmembershipLabel}>
                        其他
                      </div>
                    </template>
                    <el-input
                      size='mini'
                      type="text"
                      placeholder="请输入内容"
                      maxlength="10"
                      show-word-limit
                    >
                    </el-input>
                  </el-descriptions-item>
                </el-descriptions>
              </div>
            },
            elfooterFK: () => {
              return <div>
                <div>
                  <el-button size='mini' onClick={this.onNewaddyl.bind(this)} type="success">保存</el-button>
                </div>
              </div>
            }
          }}
        >
        </eldialog>
      </div>
    </div >
  }
}