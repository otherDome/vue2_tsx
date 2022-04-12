

/**
 * @name Users
 * @author fankai16
 * @Time 2022/03/30
 * @property {number}  elFromwidth  这是usinof 的元素宽度
 * @property {any}  Widthtimer  这是节流
 * @property {boolean} screening  这是高级筛选还是初级筛选
 * @property {any}  tableColumn  这是获取列表的设置
 * @function onScreeningClk -点击展开高级筛选初级筛选
 * @description Table 表格设置
 **/
import { Component, Vue, Prop } from 'vue-property-decorator';
import style from '@/components/elementUItsx/eltabletsx/scss/datalistTableTitle.module.scss';
@Component
export default class datalistTableTitle extends Vue {
  @Prop({
    type: Array,
    default: () => {
      return [];
    },
  })
  public tableColumn!: any;

  protected TableSetup = ['斑马线', '边框']
  protected Tablesize: string = 'mini'
  protected onClickColumn(item: any) {
    item.showtableColumn = !item.showtableColumn
  }
  protected render() {
    return <div class={style.datalistTableTitle}>
      <el-popover
        placement="bottom"
        title="基础设置"
        width="200"
        trigger="hover">
        <span slot="reference">
          <el-badge>
            <el-button
              size="mini"
              icon='el-icon-setting'
            >
              设置
            </el-button>
          </el-badge>
        </span>
        <div class={style.elpopover}>
          <div style="margin-bottom:10px;">
            <el-checkbox-group
              v-model={this.TableSetup}
              {
              ...{
                on: {
                  'change': (item: any) => {
                    this.$emit('checkboxGroup', item)
                  },
                }
              }
              }
            >
              <el-checkbox label="斑马线"></el-checkbox>
              <el-checkbox label="边框"></el-checkbox>
            </el-checkbox-group>
          </div>
          <div>
            <el-radio-group
              v-model={this.Tablesize}
              {
              ...{
                on: {
                  'change': (item: any) => {
                    this.$emit('radioGroup', item)
                  },
                }
              }
              }
            >
              <el-radio label="mini">小</el-radio>
              <el-radio label="small">中</el-radio>
              <el-radio label="medium">大</el-radio>
            </el-radio-group>
          </div>

        </div>
      </el-popover>
      <el-popover
        placement="bottom-end"
        title="自定义显示列项"
        width="300"
        trigger="hover">
        <span slot="reference">
          <el-badge>
            <el-button
              class={style.elisbtn}
              size="mini"
              icon='el-icon-date'
            >
              列表
            </el-button>
          </el-badge>
        </span>
        <div class={style.screeningTable}>
          <div class={style.screeningTable_hd}>
            <div class={style.screeningTable_hd_l}>
              显示
            </div>
            <div class={style.screeningTable_hd_r}>
              列表
            </div>
          </div>
          <div class={style.screeningTable_list}>
            {
              this.tableColumn.map((pro: any) => {
                return (
                  <div class={style.screeningTable_list_tr}>
                    <div class={style.screeningTable_list_tr_l}>
                      {
                        pro.banshowtableColumn ?
                          <icon-down-square
                            theme="outline"
                            size="14"
                            fill="#909399" />
                          :
                          pro.showtableColumn === true ?
                            <icon-down-square
                              class={style.csspointer}
                              theme="outline"
                              size="14"
                              onClick={this.onClickColumn.bind(this, pro)}
                              fill="#409EFF" />
                            :
                            <icon-square
                              class={style.csspointer}
                              theme="outline"
                              size="14"
                              onClick={this.onClickColumn.bind(this, pro)}
                              fill="#9b9b9b" />
                      }
                    </div>
                    <div class={style.screeningTable_list_tr_r}>
                      {pro.label}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </el-popover>

    </div>
  }
}