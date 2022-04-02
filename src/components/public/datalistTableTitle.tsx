

/**
 * @name Users
 * @author fankai16
 * @Time 2022/03/30
 * @property {number}  elFromwidth  这是usinof 的元素宽度
 * @property {any}  Widthtimer  这是节流
 * @property {boolean} screening  这是高级筛选还是初级筛选
 * @function onScreeningClk -点击展开高级筛选初级筛选
 * @description Table 表格设置
 **/
import { Component, Vue } from 'vue-property-decorator';
import style from '@/components/public/scss/datalistTableTitle.module.scss';
@Component
export default class App extends Vue {
  protected TableSetup = []
  protected Tablesize: string = 'mini'
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
        title="列表设置"
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
          筛选列表
        </div>
      </el-popover>

    </div>
  }
}