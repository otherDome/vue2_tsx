/**
 * @name dropdownDrawer
 * @author fankai16
 * @Time 2022/04/25
 * @property {boolean} visibleSync 是否展开下拉窗
 * @property {string}  value       选择的Value
 * @property {arr}     genderList  性别数组
 * @property {arr}     followUpList   随访记录
 * @function onfollowup     -随访点击
 * @function onSaveinof     -保存基本信息
 * @function onConfirmtoadd  确认添加主诉疾病
 * @description 今日任务
 **/

import { Component, Vue, Watch } from 'vue-property-decorator';
import style from '@/assets/styles/Theuser/component/dropdownDrawer.module.scss';
import elDrawer from '@/components/elementUItsx/eldrawer/elDrawer.vue'
import eltitlenav from '@/components/elementUItsx/eltitlenav/eltitlenav.vue'
import { genderListType } from '@/assets/model/dropdownDrawerType'
import elTabletsx from '@/components/elementUItsx/eltabletsx/elTabletsx.vue'
@Component({
  components: {
    elDrawer,
    eltitlenav,
    elTabletsx
  }
})
export default class dropdownDrawer extends Vue {
  $filters: any;
  $OnlyMessage: any;
  protected visibleSync: boolean = false
  //临时变量
  protected value: string = '0'
  protected value1: string = ''
  protected value2: any = 0
  protected value3: string = '2022-02-23 18:29:25'
  protected value4: string = '13098092937'
  protected value5: string = '[天猫]XXX大药房旗舰店'
  protected value6: string = ''
  protected value7: string = ''
  protected value8: string = ''
  protected textarea: string = ''
  protected monishulist: any = [
    {
      lable: "0",
      value: '测试0'
    },
    {
      lable: "1",
      value: '测试1'
    },
    {
      lable: "2",
      value: '测试2'
    },
    {
      lable: "3",
      value: '测试3'
    },
    {
      lable: "4",
      value: '测试4'
    }
  ]
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
  ]
  protected elTableColumnList: any = [
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
  ]
  protected currentSymptoms: any = [

  ]
  //临时变量
  protected genderList: Array<genderListType> = [
    {
      key: '0',
      name: '未知'
    },
    {
      key: '1',
      name: '男'
    },
    {
      key: '2',
      name: '女'
    },
    {
      key: '3',
      name: '保密'
    }
  ]
  protected followUpList: any = [{
    content: '支持使用图标',
    timestamp: '2018-04-12 20:46',
    size: 'large',
    type: 'primary',
    icon: 'el-icon-more'
  }, {
    content: '支持自定义颜色',
    timestamp: '2018-04-03 20:46',
    size: 'large',
    color: '#0bbd87'
  }, {
    content: '支持自定义尺寸',
    timestamp: '2018-04-03 20:46',
    size: 'large',
    color: '#0bbd87'
  },
  {
    content: '支持自定义尺寸',
    timestamp: '2018-04-03 20:46',
    size: 'large',
    color: '#0bbd87'
  },
  {
    content: '支持自定义尺寸',
    timestamp: '2018-04-03 20:46',
    size: 'large',
    color: '#0bbd87'
  },
  {
    content: '支持自定义尺寸',
    timestamp: '2018-04-03 20:46',
    size: 'large',
    color: '#0bbd87'
  },
  {
    content: '支持自定义尺寸',
    timestamp: '2018-04-03 20:46',
    size: 'large',
    color: '#0bbd87'
  },
  {
    content: '支持自定义尺寸',
    timestamp: '2018-04-03 20:46',
    size: 'large',
    color: '#0bbd87'
  },
  {
    content: '支持自定义尺寸',
    timestamp: '2018-04-03 20:46',
    size: 'large',
    color: '#0bbd87'
  },
  {
    content: '支持自定义尺寸',
    timestamp: '2018-04-03 20:46',
    size: 'large',
    color: '#0bbd87'
  }, {
    content: '默认样式的节点',
    timestamp: '2018-04-03 20:46'
  }]
  @Watch("value1")
  private value1change() {
    this.value2 = this.$filters.jsGetAge(this.value1)
  }
  private mounted() {
    this.init()
  }
  protected init() {
    this.$bus.$on('TodaysTask', (item: any) => {
      this.visibleSync = true
    });
  }
  protected onSaveinof() {
    this.$OnlyMessage.success('基本信息保存成功');
  }
  protected onConfirmtoadd() {
    if (this.value6 === '') {
      this.$OnlyMessage.error('主诉疾病不能为空');
      return
    }
    const newJson = {
      name: this.value6,
      type: 'success'
    }
    this.currentSymptoms.push(newJson)
    this.currentSymptoms = this.$filters.roteraRR(this.currentSymptoms, 'name')
    console.log("确认添加", this.currentSymptoms)
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
                          <el-button onClick={this.onSaveinof.bind(this)} size='mini' type="primary">保存</el-button>
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
                        <div class='istitle'>
                          会员ID
                        </div>
                      </template>
                      <el-input
                        size='mini'
                        placeholder="请输入会员ID"
                        disabled
                      />
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        <div class='istitle'>
                          姓名
                        </div>
                      </template>
                      <el-input
                        size='mini'
                        placeholder="请输入会员姓名"
                        disabled
                      />
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        <div class='istitle'>
                          性别
                        </div>
                      </template>
                      <el-select
                        size='mini'
                        v-model={this.value}
                        placeholder="请选择">
                        {
                          this.genderList.map((pro: genderListType, index: number) => {
                            return (
                              <el-option
                                key={index}
                                label={pro.name}
                                value={pro.key}>
                              </el-option>
                            )
                          })
                        }
                      </el-select>
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        <div class='istitle'>
                          出生日期
                        </div>
                      </template>
                      <el-date-picker
                        v-model={this.value1}
                        value-format='yyyy-MM-dd'
                        type="date"
                        style='width:100%;'
                        size='mini'
                        placeholder="选择日期">
                      </el-date-picker>
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        <div class='istitle'>
                          年龄
                        </div>
                      </template>
                      <el-input
                        size='mini'
                        v-model={this.value2}
                        placeholder=""
                        disabled
                      />
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        创建时间
                      </template>
                      <el-input
                        size='mini'
                        v-model={this.value3}
                        placeholder="请输入会员姓名"
                        disabled
                      />
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        <div class='istitle'>
                          手机号
                        </div>
                      </template>
                      <el-input
                        size='mini'
                        v-model={this.value4}
                        placeholder="请输入手机号"
                        disabled
                      />
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        <div class='istitle'>
                          付费会员
                        </div>
                      </template>
                      <el-tag size="small">学校</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item>
                      <template slot="label">
                        <div class='istitle'>
                          备注
                        </div>
                      </template>
                      <el-input
                        size='mini'
                        v-model={this.value5}
                        placeholder="请输入手机号"
                        disabled
                      />
                    </el-descriptions-item>
                  </el-descriptions>
                </div>
                <div class='elDrawer_mainbody_left_informarecord'>
                  <eltitlenav
                    props={{
                      masTitle: '随访记录'
                    }}
                  >
                  </eltitlenav>
                  <div class='informarecord_timeline'>
                    <el-timeline>
                      {this.followUpList.map((activity: any, index: number) => {
                        return (
                          <el-timeline-item
                            key={index}
                            icon={activity.icon}
                            type={activity.type}
                            color={activity.color}
                            size={activity.size}
                            timestamp={activity.timestamp}>
                            {activity.content}
                          </el-timeline-item>
                        )
                      })}
                    </el-timeline>

                  </div>
                </div>
              </div>
              <div class='elDrawer_mainbody_right'>
                <div class='elDrawer_mainbody_right_top'>
                  <eltitlenav
                    props={{
                      masTitle: '订单信息'
                    }}
                  >
                  </eltitlenav>
                  <div class='elDrawer_mainbody_right_topTable'>
                    <elTabletsx
                      props={{
                        data: this.tableData,
                        border: true,
                        stripe: true,
                        size: 'mini',
                        tooltipEffect: "dark",
                        elTableColumn: this.elTableColumn,
                        maxHeight: 100,
                        stylecLIS: "border-radius: 5px;box-shadow: #ebeef5 0px 0px 13px;color:#515151;",
                        cellStyle: ({ row, rowIndex }: any) => {
                          var style = 'height:22px;padding:0px;font-size:13px;line-height: 22px;text-align: center;'
                          if (rowIndex % 2 == 0) {
                            style += 'background: rgb(238 250 255 / 80%);'
                          }
                          if (rowIndex % 2 !== 0) {
                            style += 'background: rgb(238 250 255 / 30%);'
                          }
                          return style
                        },
                        headercellstyle: () => {
                          var style = 'height:20px;padding:0px;text-align: center;'
                          style += 'background: linear-gradient(to bottom, #EEF5FB 0%,#E2EDFA 100%);'
                          return style;
                        },
                      }}
                    >
                    </elTabletsx>
                  </div>
                </div>
                <div class='elDrawer_mainbody_right_mainlodge'>
                  <div class='elDrawer_mainbody_right_mainlodge_header'>
                    <eltitlenav
                      props={{
                        masTitle: '症状管理'
                      }}
                      scopedSlots={{
                        eltitlenavBtn: () => {
                          return <div class='elDrawer_mainLodgeSearch'>
                            <el-select
                              filterable
                              size='mini'
                              v-model={this.value6}
                              placeholder="请选择主诉病症">
                              {
                                this.monishulist.map((pro: any, ind: number) => {
                                  return (
                                    <el-option
                                      key={ind}
                                      label={pro.label}
                                      value={pro.value}>
                                    </el-option>
                                  )
                                })
                              }
                            </el-select>
                            <el-button size='mini' onClick={this.onConfirmtoadd.bind(this)} class='elDrawer_mainLodgeSearch_l' type="primary">确定添加</el-button>
                          </div>
                        }
                      }}
                    >
                    </eltitlenav>
                  </div>
                  {
                    this.currentSymptoms.length === 0 ?
                      <div class='elDrawer_mainbody_right_mainlodge_zz'>
                        <el-empty props={{
                          imageSize: 30
                        }}></el-empty>
                      </div> :
                      <div class='elDrawer_mainbody_right_mainlodge_tag'>
                        {
                          this.currentSymptoms.map((item: any, index: number) => {
                            return (
                              <el-tag
                                class='ismar'
                                size='mini'
                                key={index}
                                closable
                                {
                                ...{
                                  on: {
                                    'close': () => {
                                      this.currentSymptoms.splice(index, 1);
                                    }
                                  }
                                }
                                }
                                type={item.type}>
                                {item.name}
                              </el-tag>
                            )
                          })
                        }
                      </div>
                  }
                </div>
                <div class='elDrawer_mainbody_right_assessment'>
                  <div class='mr'>
                    病程周期评估:
                  </div>
                  <el-select
                    filterable
                    size='mini'
                    v-model={this.value6}
                    placeholder="请选择主诉病症">
                    {
                      this.monishulist.map((pro: any, ind: number) => {
                        return (
                          <el-option
                            key={ind}
                            label={pro.label}
                            value={pro.value}>
                          </el-option>
                        )
                      })
                    }
                  </el-select>
                </div>
                <div class='elDrawer_mainbody_right_jblc'>
                  <eltitlenav
                    props={{
                      masTitle: '病程临床治疗方案'
                    }}
                  >
                  </eltitlenav>
                  <div class='elDrawer_mainbody_right_jblc_list'>
                    <div class='elDrawer_mainbody_right_jblc_list_left'>
                      <h1>1.推荐治疗方案</h1>
                      <el-card class="box-card">
                        753951
                      </el-card>
                    </div>
                    <div class='elDrawer_mainbody_right_jblc_list_right'>
                      <h1>2.推荐治疗方案</h1>
                      <elTabletsx
                        props={{
                          data: this.tableData,
                          border: true,
                          stripe: true,
                          size: 'mini',
                          tooltipEffect: "dark",
                          elTableColumn: this.elTableColumnList,
                          maxHeight: 150,
                          isheight: 150,
                          stylecLIS: "border-radius: 5px;box-shadow: #ebeef5 0px 0px 13px;color:#515151;",
                          cellStyle: ({ row, rowIndex }: any) => {
                            var style = 'height:22px;padding:0px;font-size:13px;line-height: 22px;text-align: center;'
                            if (rowIndex % 2 == 0) {
                              style += 'background: rgb(238 250 255 / 80%);'
                            }
                            if (rowIndex % 2 !== 0) {
                              style += 'background: rgb(238 250 255 / 30%);'
                            }
                            return style
                          },
                          headercellstyle: () => {
                            var style = 'height:20px;padding:0px;text-align: center;'
                            style += 'background: linear-gradient(to bottom, #EEF5FB 0%,#E2EDFA 100%);'
                            return style;
                          },
                        }}
                      >
                      </elTabletsx>
                    </div>
                  </div>
                </div>
                <div class='elDrawer_mainbody_right_yyxycsf'>
                  <eltitlenav
                    props={{
                      masTitle: '邀约下一次随访/加微'
                    }}
                  >
                  </eltitlenav>
                  <div class='elDrawer_mainbody_right_yyxycsf_from'>
                    <el-form props={{
                      inline: true
                    }} size='mini'>
                      <el-form-item label="下一次随访时间">
                        <el-date-picker
                          v-model={this.value7}
                          type="date"
                          placeholder="选择日期">
                        </el-date-picker>
                      </el-form-item>
                      <el-form-item label="回访结果">
                        <el-select
                          filterable
                          size='mini'
                          v-model={this.value8}
                          placeholder="请选择主诉病症">
                          {
                            this.monishulist.map((pro: any, ind: number) => {
                              return (
                                <el-option
                                  key={ind}
                                  label={pro.label}
                                  value={pro.value}>
                                </el-option>
                              )
                            })
                          }
                        </el-select>
                      </el-form-item>

                    </el-form>
                    <h1>备注</h1>
                    <el-input
                      type="textarea"
                      placeholder="请输入内容"
                      v-model={this.textarea}
                      maxlength="300"
                      show-word-limit
                    />
                  </div>
                </div>
                <div class='elDrawer_mainbody_right_isbtn'>
                  <el-button size='mini' type="info">返回</el-button>
                  <el-button size='mini' type="primary">保存</el-button>
                </div>
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