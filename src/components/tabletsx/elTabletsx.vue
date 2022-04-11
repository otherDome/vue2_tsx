<template>
  <div class="elTabletsxFk">
    <div class="elTabletsxFk_table">
      <el-table
        :data="data"
        :border="border"
        :stripe="stripe"
        :tooltip-effect="tooltipEffect"
        :size="size"
        :show-summary="showSummary"
        :style="stylecLIS"
        class="tableBox"
        :row-style="rowStyle"
        :cell-style="cellStyle"
        :header-row-style="headerRowStyle"
        :header-cell-style="headercellstyle"
        :row-class-name="rowClassName"
        :header-row-class-name="headerRowClassName"
        @selection-change="selectionChange"
        @sort-change="sortChange"
        @expand-change="expandChange"
      >
        <el-table-column v-if="selection" type="selection" width="55"> </el-table-column>
        <el-table-column v-if="serialnumber" label="序号" type="index" width="55">
        </el-table-column>
        <el-table-column
          v-for="(item, isindex) in elTableColumn"
          :type="item.type"
          :key="isindex"
          :label="item.label"
          :prop="item.prop"
          :sortable="item.sortable"
          :show-header="item.showHeader"
          :render-header="item.renderHeader"
          :show-overflow-tooltip="item.showOverflowTooltip"
          :fixed="item.fixed"
          :width="item.width"
          :filters="item.filters"
          :filterMethod="item.filterMethod"
        >
          <template slot-scope="scope">
            <div v-if="item.type === 'expand'">
             <slot name="expand" msg="我是子组件的内容">

             </slot>
            </div>
            <div v-else style="width: 100%">
              <div :class="item.showOverflowTooltip === true ? 'Overflowhidden' : ''">
                {{ scope.row[item.prop] }}
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
/**
 * @name elTabletsx
 * @author fankai16
 * @Time 2022/04/11
 * @property {any}  data  表格列表数据
 * @property {any}  elTableColumn   表格行设置
 * @property {Boolean}  stripe  是否为斑马纹 table
 * @property {string}  tooltipEffect   tooltip effect 属性
 * @property {string}  size   表格粗细大小
 * @property {Boolean}  showSummary   是否在表尾显示合计行
 * @property {string}  stylecLIS  style 行内样式结束
 * @property {string}  border  是否展示border样式
 * @property {Boolean}  selection   是否展示出选择器
 * @property {Boolean}  serialnumber  是否展示序号
 * @property {Function}  rowStyle  行内样式函数
 * @property {Function}  cellStyle  单元格样式函数
 * @property {arr}       elTableColumn    表投行设置
 * {
 *        key:"当前索引",
 *      label:"列表名字",
 *       prop:"数据的key",
 *   sortable:"是否带筛选",
 *  showHeader:"是否展示表头行"
 *  renderHeader:"列标题 Label 区域渲染使用的 Function",
 * showOverflowTooltip:"当内容过长被隐藏时显示 tooltip",
 *        fixed:"	列是否固定在左侧或者右侧，true 表示固定在左侧",
 *        width:"对应列的宽度"
 *        filters:"该列的筛选",
 *   filterMethod:"该列的筛选函数"
 * }
 * @property {Function}  headerRowStyle  表头行的 style 的回调方法
 * @property {Function}  headercellstyle 表头单元格的 style 的回调
 * @property {Function}  rowClassName    行的 className 的回调方
 * @property {Function}  headerRowClassName   行的 className 的回调方
 * @property {Function}  selectionChange 多选单选数据
 * @property {Function}  sortChange  当表格的排序条件发生变化的时候会触发该事件
 * @property {Function}  filterHandler  当前表格赛选检测
 * @property {Function}  expandChange   检测展开收回
 * @function onThePhonelock  点击电话锁定标记弹窗
 * @description elTable tsx 组件用
 **/
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class elTabletsxFk extends Vue {
  //表格数据列表开始
  @Prop({
    type: Array,
    default: () => {
      return [];
    },
  })
  public data!: any;

  //表格行设置
  @Prop({
    type: Array,
    default: () => {
      return [];
    },
  })
  public elTableColumn!: any;

  //是否为斑马纹 table
  @Prop({
    type: Boolean,
    default: () => {
      return false;
    },
  })
  public stripe!: boolean;

  //tooltip effect 属性
  @Prop({
    type: String,
    default: () => {
      return "";
    },
  })
  public tooltipEffect!: string;

  //size 表格粗细大小
  @Prop({
    type: String,
    default: () => {
      return "mini";
    },
  })
  public size!: string;

  //是否在表尾显示合计行
  @Prop({
    type: Boolean,
    default: () => {
      return false;
    },
  })
  public showSummary!: boolean;

  //style 行内样式开始
  @Prop({
    type: String,
    default: () => {
      return "width:100%;";
    },
  })
  public stylecLIS!: string;

  //border 是否展示
  @Prop({
    type: Boolean,
    default: () => {
      return false;
    },
  })
  public border!: boolean;

  //rowStyle 行内样式函数
  @Prop({
    type: Function,
    default: () => {
      return "";
    },
  })
  public rowStyle!: Function;

  //单元格的 cellStyle 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。
  @Prop({
    type: Function,
    default: () => {
      return "";
    },
  })
  public cellStyle!: Function;

  //表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。
  @Prop({
    type: Function,
    default: () => {
      return "";
    },
  })
  public headerRowStyle!: Function;

  //表头单元格的 style 的回调
  @Prop({
    type: Function,
    default: () => {
      return "";
    },
  })
  public headercellstyle!: Function;

  //行的 className 的回调方
  @Prop({
    type: Function,
    default: () => {
      return "";
    },
  })
  public rowClassName!: Function;

  //表头行的 headerRowClassName 的回调方法
  @Prop({
    type: Function,
    default: () => {
      return "";
    },
  })
  public headerRowClassName!: Function;

  //selectionChange多选单选数据
  @Prop({
    type: Function,
    default: () => {
      return "";
    },
  })
  public selectionChange!: Function;

  //当表格的排序条件发生变化的时候会触发该事件
  @Prop({
    type: Function,
    default: () => {
      return "";
    },
  })
  public sortChange!: Function;

 //检测展开收回
 @Prop({
    type: Function,
    default: () => {
      return "";
    },
  })
  public expandChange!: Function;


  //selection 展示多选列表
  @Prop({
    type: Boolean,
    default: () => {
      return false;
    },
  })
  public selection!: Boolean;

  //serialnumber 是否展示序号
  @Prop({
    type: Boolean,
    default: () => {
      return false;
    },
  })
  public serialnumber!: Boolean;
}
</script>
<style lang="scss" scoped>
.elTabletsxFk {
  width: 100%;
  height: 100%;

  .elTabletsxFk_table {
    width: 100%;
    height: 100%;

    .Overflowhidden {
      width: 100%;
      overflow: hidden; //超出的文本隐藏
      text-overflow: ellipsis; //溢出用省略号显示
      white-space: nowrap; //溢出不换行
    }
  }
}
</style>
