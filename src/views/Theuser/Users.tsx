
/**
 * @name Users
 * @author fankai16
 * @Time 2022/03/30
 * @property {number}  elFromwidth  这是usinof 的元素宽度
 * @property {any}  Widthtimer  这是节流
 * @property {boolean} screening  这是高级筛选还是初级筛选
 * @property {boolean} elTabletsxborder 是否展示列表Border
 * @property {boolean} elTabletsxstripe 是否展示斑马线
 * @property {string}  elTabletsxsize   列表大小
 * @property {string}  elTabletsxcellStyle  列表行内样式
 * @property {string}  elTabletsxheadercellstyle  列表头部样式
 * @property {string}  elTabletsxoddnumber   列表奇数背景颜色
 * @property {string}  elTabletsxevennumber  列表偶数背景颜色
 * @property {string}  elTabletsxheaderBGS   列表头部背景颜色
 * @function onScreeningClk -点击展开高级筛选初级筛选
 * @function onOnreSize      获取指定元素的宽度
 * @function onThePhonelock  点击电话锁定标记弹窗
 * @description 用户分配
 **/
import { Component, Mixins } from 'vue-property-decorator';
import style from '@/assets/styles/Theuser/Users.module.scss';
import datalistTableTitle from '@/components/elementUItsx/eltabletsx/datalistTableTitle'
import elTabletsx from '@/components/elementUItsx/eltabletsx/elTabletsx.vue'
import eldialog from '@/components/elementUItsx/eldialog/eldialog.vue'
import { onresize } from '@/components/mixins/onresize';
@Component({
  components: {
    datalistTableTitle,
    elTabletsx,
    eldialog
  }
})
export default class Users extends Mixins(onresize) {
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
      type: "expand",
      label: "详情",
      width: '55',
      showtableColumn: true,
      banshowtableColumn: true
    },
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
      minwidth: '100',
      label: "操作",
      prop: "",
      fixed: "right",
      showtableColumn: true
    }
  ]

  //这是数据列表tableData 结束
  protected screening: boolean = false
  protected istext: any = ["历史数据", "禁用时间"]
  protected created() {
    this.onOnreSize('elFromwidth')
  }
  protected mounted() {
    this.onresizeInit('elFromwidth')
  }
  protected onScreeningClk() {
    this.screening = !this.screening
  }
  protected onThePhonelock() {

    console.log("sonThePhonelock")
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
  protected render() {
    return <div class={style.Users}>
      <div class={[this.screening === true ? style.elFromACTIVE : '', style.elFrom]} id='elFromwidth'>
        {
          this.screening === false ?
            <div
              class={style.screeningFalse}
            >
              {/*这是普通筛选开始*/}
              <div class={style.elFrom_header800} >
                <el-form
                  size='small'
                  inline={true}
                >
                  <el-form-item>
                    <el-input
                      placeholder="搜索会员姓名/手机号"
                    ></el-input>
                  </el-form-item>
                  <el-form-item
                    class={style.elFrom_header1024}
                  >
                    <el-input
                      placeholder="搜索商品编码/名称"
                    ></el-input>
                  </el-form-item>
                  {
                    this.AFold_bus !== true ?
                      <div class="el-form-item el-form-item--small" >
                        <el-form-item
                          class={style.elFrom_header1280}
                        >
                          <el-input
                            placeholder="药师微信"
                          ></el-input>
                        </el-form-item>
                        <el-form-item
                          class={style.elFrom_header1024}
                        >
                          <el-input
                            placeholder="锁定人"
                          ></el-input>
                        </el-form-item>
                      </div>
                      :
                      <div class="el-form-item el-form-item--small" >
                        <el-form-item
                          class={style.elFrom_header1280}
                        >
                          <el-input
                            placeholder="药师微信"
                          ></el-input>
                        </el-form-item>
                      </div>
                  }
                  {
                    this.AFold_bus !== true ?
                      <div class="el-form-item el-form-item--small">
                        <el-form-item class={style.elFrom_header1500}>
                          <el-select
                            filterable
                            placeholder="商品金额">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                          </el-select>
                        </el-form-item>
                        <el-form-item
                          class={style.elFrom_header1750}
                        >
                          <el-date-picker
                            default-time="['00:00:00', '23:59:59']"
                            format="yyyy-MM-dd HH:mm:ss"
                            value-format="yyyy-MM-dd HH:mm:ss"
                            type="datetimerange"
                            range-separator="至"
                            start-placeholder="查询开始时间"
                            end-placeholder="查询结束时间"></el-date-picker>
                        </el-form-item>
                      </div>
                      :
                      <el-form-item
                        class={style.elFrom_header1750}
                      >
                        <el-date-picker
                          default-time="['00:00:00', '23:59:59']"
                          format="yyyy-MM-dd HH:mm:ss"
                          value-format="yyyy-MM-dd HH:mm:ss"
                          type="datetimerange"
                          range-separator="至"
                          start-placeholder="查询开始时间"
                          end-placeholder="查询结束时间"></el-date-picker>
                      </el-form-item>
                  }
                  <el-form-item>
                    <el-button
                      icon="el-icon-search"
                      type="primary"
                    > 查询
                    </el-button>
                  </el-form-item>
                  <el-form-item>
                    <el-button
                      type="info"
                      icon="el-icon-refresh-right"
                    >
                      重置
                    </el-button>
                  </el-form-item>
                  <el-form-item>
                    <div class={style.fatherscreening}
                      onClick={this.onScreeningClk.bind(this)}
                    >
                      <div class={style.screening}>
                        <icon-filter class={style.icon_filter} theme="outline" size="16" fill="#409EFF" />
                        <span>高级筛选</span>
                      </div>
                    </div>
                  </el-form-item>
                </el-form>
              </div>
            </div>
            :
            <div
              class={style.screeningTrue}
            >
              {/*这是高级筛选开始*/}
              <div class={style.elFrom_bottomTitle}>
                <div class={style.elFrom_bottomTitle_left}>
                  <div class={style.shaixuan}>
                    <icon-filter class={style.icon_filter} theme="outline" size="16" fill="#409EFF" />
                    <span>高级筛选</span>
                  </div>
                </div>
                <div class={style.elFrom_bottomTitle_right}>
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
              <div class={style.elFrom_bottomfrom}>
                <el-form
                  size='mini'
                  label-width='68px'
                  inline={true}
                >
                  <div>
                    <el-form-item
                      label="会员信息"
                    >
                      <el-input
                        class={style.elform_width}
                        placeholder="搜索会员姓名/手机号"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="商品信息"
                    >
                      <el-input
                        class={style.elform_width}
                        placeholder="搜索商品编码/名称"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="店铺类别"
                    >
                      <el-select
                        filterable
                        class={style.elform_width}
                        placeholder="请选择店铺">
                        <el-option label="区域一" ></el-option>
                        <el-option label="区域二" ></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item
                      label="是否锁定"
                    >
                      <el-select
                        filterable
                        class={style.elform_width}
                        placeholder="请选择是否锁定">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item
                      label="微信标记"
                    >
                      <el-select
                        filterable
                        class={style.elform_width}
                        placeholder="请选择微信标记">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item
                      label="订单来源"
                    >
                      <el-select
                        multiple
                        collapse-tags
                        class={style.elform_width}
                        placeholder="请选择">
                        <el-option
                          label="item.label"
                        >
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item
                      label="商品类别"
                    >
                      <el-select
                        class={style.elform_width}
                        clearable
                        placeholder="请选择商品类别"
                        multiple
                        collapse-tags
                      >
                        <el-option
                          value="mineStatusValue"
                        >
                          <el-tree
                            show-checkbox
                            node-key="comID"
                            ref="tree"
                            highlight-current
                          ></el-tree>
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item
                      label="锁定人"
                    >
                      <el-input
                        class={style.elform_width}
                        placeholder="请输入锁定人"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="时间类别"
                    >
                      <el-select
                        filterable
                        class={style.elform_width}
                        placeholder="请选择时间类别">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item
                      label="渠道来源"
                    >
                      <el-select
                        filterable
                        class={style.elform_width}
                        placeholder="请选择渠道来源">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item
                      label="药师微信"
                    >
                      <el-input
                        class={style.elform_width}
                        placeholder="请输入药师微信"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="商品金额"
                    >
                      <el-select
                        filterable
                        class={style.elform_width}
                        placeholder="请选择金额">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item
                      label="时间区间"
                    >
                      <el-date-picker
                        default-time="['00:00:00', '23:59:59']"
                        format="yyyy-MM-dd HH:mm:ss"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="查询开始时间"
                        end-placeholder="查询结束时间"></el-date-picker>
                    </el-form-item>
                    <el-form-item
                      label="数据类型"
                    >
                      <el-checkbox-group
                        v-model={this.istext}
                      >
                        <el-checkbox label="历史数据"></el-checkbox>
                        <el-checkbox label="禁用时间"></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </div>
                </el-form>
              </div>
            </div>
        }
        {/*这是手机版800px以下 */}
        <div class={style.Mobilephone}>
          <div class={style.Mobilephone680_390}>
            这是手机UI
          </div>
          <div class={style.Mobilephone390_390}>
            这是手机UI
          </div>
        </div>


      </div>
      <div class={[style.elTablePackage, style.elTablePackage]}>
        <div class={style.elTablePackage_title}>
          <div class={style.elTablePackage_title_l}>
            <el-button
              size="mini"
              icon='el-icon-lock'
              type='success'
            >
              批量锁定
            </el-button>
            <el-button
              size="mini"
              icon='el-icon-unlock'
              type="warning"
            >
              批量解锁
            </el-button>
            <el-button
              size="mini"
              icon='el-icon-mobile-phone'
              type="danger"
              onClick={this.onThePhonelock.bind(this)}
            >
              电话锁定标记
            </el-button>
          </div>
          <div class={style.elTablePackage_title_r}>
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
            ></datalistTableTitle>
          </div>
        </div>
        <div class={style.elTableTb}>
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
              expand: (param: any) => {
                const item: any = param.isitem
                return <div>这是一个名字为expand的插槽可以自定义里面内容 {item.id}</div>
              },
              Thecustom: (param: any) => {
                const item: any = param.isitem
                return <div>
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{item.name}</span>
                </div>
              },
              operation: (param: any) => {
                const item: any = param.isitem
                return <div>
                  <el-button type="text" size="mini" class="btmmini">删除</el-button>
                  <el-button type="text" size="mini" class="btmmini">编辑</el-button>
                </div>
              }
            }}
          >
          </elTabletsx>
        </div>
        <div>
          <eldialog
            props={{
              visibleSync: true
            }}
            scopedSlots={{
              elcontentFK: () => {
                return <div>
                  asdasdaasa
                </div>
              },
              elfooterFK: () => {
                return <div>
                  <el-button>取 消</el-button>
                  <el-button type="primary">确 定</el-button>
                </div>
              }
            }}
          >

          </eldialog>
        </div>
      </div >
    </div >
  }
}