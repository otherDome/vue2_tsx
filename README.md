# 德开医药科技有限公司health前端框架

___@author 范凯___  
___@email  1038886097@qq.com___

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 兼容性说明

应用的&框架

<kbd style='color:green'>vueCLI4.12</kbd>
<kbd style='color:green'>vue内核2.6</kbd>
<kbd style='color:green'>TS4.1.6</kbd>
<kbd style='color:green'>TSx</kbd>

# elementUItsx 文档

## elTabletsx文件夹

### elTabletsx主要组件(table)
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
 * type:'expand/index/Thecustom/operation'  打开表格下箭头参数/自定义index函数/自定义表格插槽/按钮操作
 * label:"列表名字",
 * prop:"数据的key",
 * sortable:"是否带筛选",
 * showHeader:"是否展示表头行"
 * renderHeader:"列标题 Label 区域渲染使用的 Function",
 * showOverflowTooltip:"当内容过长被隐藏时显示 tooltip",
 * fixed:"	列是否固定在左侧或者右侧，true 表示固定在左侧",
 * width:"对应列的宽度",
 * minwidth:"最小宽度队列"
 * filters:"该列的筛选",
 * filterMethod:"该列的筛选函数",
 * showtableColumn:"是否展示当前列表自定义列表",
 * banshowtableColumn:'禁止当前key是否展示当前列表自定义列表'
 * }
 * @property {Function}  headerRowStyle  表头行的 style 的回调方法
 * @property {Function}  headercellstyle 表头单元格的 style 的回调
 * @property {Function}  rowClassName    行的 className 的回调方
 * @property {Function}  headerRowClassName   行的 className 的回调方
 * @property {Function}  selectionChange 多选单选数据
 * @property {Function}  sortChange  当表格的排序条件发生变化的时候会触发该事件
 * @property {Function}  filterHandler  当前表格赛选检测
 * @property {Function}  expandChange   检测展开收回
 * @property {Function}  summaryMethod  自定义计算函数回传
 * -----------------------分页数据区域-------------------------
 * @property {Boolean}   showpagination 是否展示分页
 * @property {Function}  sizeChange 请定义分页size
 * @property {Function}  currentChange 请定义分页page
 * @property {number}    currentPage   定义分页第几页
 * @property {number}    pageSize   定义默认几页
 * @property {number}    total   总条数
 * @property {string}    pagedirection 分页条方向
 * @property {arr}      pageSizes  每页展示多少条数据
 * @description elTable tsx 组件用
**/
### datalistTableTitle(table 设置组件)
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
### eldialog(弹窗组件)
/**
 * @name eldialog
 * @author fankai16
 * @Time 2022/04/12
 * @property {boolean}  visibleSync  打开关闭自定义弹窗
 * @property {boolean}  titleShow    是否引用组件的title具名 slot
 * @property {string}  iswidth    宽度
 * @property {boolean}  fullscreen  是否为全屏 Dialog
 * @property {String}   marginTop  Dialog CSS 中的 margin-top 值
 * @property {boolean}  modal      是否需要遮罩层
 * @property {boolean}  modalAppendToBody 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上
 * @property {boolean}  appendToBody 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true
 * @property {boolean}  lockScroll   是否在 Dialog 出现时将 body 滚动锁定
 * @property {string}   customClass  Dialog 的自定义类名
 * @property {boolean}  closeOnClickModal  是否可以通过点击 modal 关闭 Dialog
 * @property {boolean}  closeOnPressEscape 是否可以通过按下 ESC 关闭 Dialog
 * @property {boolean}  showClose 是否显示关闭按钮
 * @property {boolean}  center 是否对头部和底部采用居中布局
 * @property {boolean}  destroyOnClose 关闭时销毁 Dialog 中的元素
 * @property {Function}  headerRowStyle  表头行的 style 的回调方法
 * @description el-dialog 的封装
 **/