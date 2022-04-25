/**
 * @name dropdownDrawer
 * @author fankai16
 * @Time 2022/04/25
 * @property {boolean} visibleSync 是否展开下拉窗
 * @function onfollowup     -随访点击
 * @description 今日任务
 **/

import { Component, Vue } from 'vue-property-decorator';
import style from '@/assets/styles/Theuser/component/dropdownDrawer.module.scss';
import elDrawer from '@/components/elementUItsx/eldrawer/elDrawer.vue'
import eltitlenav from '@/components/elementUItsx/eltitlenav/eltitlenav.vue'
@Component({
  components: {
    elDrawer,
    eltitlenav
  }
})
export default class dropdownDrawer extends Vue {
  protected visibleSync: boolean = true
  private mounted() {
    this.init()
  }
  protected init() {
    this.$bus.$on('TodaysTask', (item: any) => {
      this.visibleSync = true
    });
  }
  protected render() {
    return <div class={style.dropdownDrawer}>
      <elDrawer
        props={{
          visibleSync: this.visibleSync,
          direction: 'ttb',
          customClass: 'dropdownDrawer_s',
          title: '随访记录',
          beforeClose: () => {
            this.$confirm('确认关闭？')
              .then(_ => {
                this.visibleSync = false
              })
              .catch(_ => {
                console.warn("点击关闭收起")
              });
          }
        }}
        scopedSlots={{
          mainbody: () => {
            return <div class='elDrawer_mainbody'>
              <div class='elDrawer_mainbody_left'>
                <div class='elDrawer_mainbody_left_information'>
                  <eltitlenav
                    props={{
                      masTitle: '基本信息'
                    }}
                    scopedSlots={{
                      eltitlenavBtn: () => {
                        return <div>
                          <el-button size='mini' type="primary">保存</el-button>
                        </div>
                      }
                    }}
                  >

                  </eltitlenav>
                  <el-descriptions class="margin-top" props={{
                    column: 2
                  }} size="mini" border>
                    <el-descriptions-item>
                      <template slot="label">
                        会员ID
                      </template>
                      kooriookami
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        姓名
                      </template>
                      18100000000
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        性别
                      </template>
                      苏州市
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        出生日期
                      </template>
                      苏州市
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        年龄
                      </template>
                      苏州市
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        创建时间
                      </template>
                      苏州市
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        手机号
                      </template>
                      苏州市
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        付费会员
                      </template>
                      <el-tag size="small">学校</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        备注
                      </template>
                      江苏省苏州市吴中区吴中大道 1188 号
                    </el-descriptions-item>
                  </el-descriptions>
                </div>
                <div class='elDrawer_mainbody_left_informarecord'>
                  5
                </div>
              </div>
              <div class='elDrawer_mainbody_right'>

                9
              </div>
            </div>
          }
        }}
      >
      </elDrawer >
      951753
    </div >
  }
}