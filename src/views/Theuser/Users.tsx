
/**
 * @name Users
 * @author fankai16
 * @Time 2022/03/30
 * @property {number}  elFromwidth  这是usinof 的元素宽度
 * @property {any}  Widthtimer  这是节流
 * @property {boolean} screening  这是高级筛选还是初级筛选
 * @function onScreeningClk -点击展开高级筛选初级筛选
 * @description 用户分配
 **/
import { Component, Mixins, Prop } from 'vue-property-decorator';
import style from '@/assets/styles/Theuser/Users.module.scss';
import datalistTableTitle from '@/components/public/datalistTableTitle'
import UsersTable from '@/views/Theuser/Table/UsersTable.vue'
import { onresize } from '@/components/mixins/onresize';
const that: any = this
@Component({
  components: {
    datalistTableTitle,
    UsersTable
  }
})
@Component
export default class Users extends Mixins(onresize) {
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
                            clearable="false"
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
                          clearable="false"
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
                          value="item.value">
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
                        clearable="false"
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
              icon='el-icon-download'
              class={style.elTablePackage_Theimport}
            >
              导入
            </el-button>
            <el-button
              size="mini"
              icon='el-icon-upload2'
            >
              导出
            </el-button>
            <el-button
              size="mini"
              icon='el-icon-lock'
            >
              批量锁定
            </el-button>
            <el-button
              size="mini"
              icon='el-icon-unlock'
            >
              批量解锁
            </el-button>
            <el-button
              size="mini"
              icon='el-icon-mobile-phone'
            >
              电话锁定标记
            </el-button>
          </div>
          <div class={style.elTablePackage_title_r}>
            <datalistTableTitle
              {
              ...{
                on: {
                  'checkboxGroup': (item: any) => {
                    console.log('数据回传表格斑马线', item)
                  },
                  'radioGroup': (item: any) => {
                    console.log('数据回传大小', item)
                  },
                }
              }
              }
            ></datalistTableTitle>
          </div>
        </div>
        <div class={style.elTableTb}>
          <UsersTable></UsersTable>
        </div>
      </div >
      <div>

      </div>
    </div >
  }
}