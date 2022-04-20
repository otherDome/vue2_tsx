<template>
  <div class="eldialog">
    <el-dialog
      :title="title"
      :visible.sync="isvisible"
      :width="iswidth"
      :fullscreen="fullscreen"
      :top="marginTop"
      :modal="modal"
      :modal-append-to-body="modalAppendToBody"
      :append-to-body="appendToBody"
      :lock-scroll="lockScroll"
      :custom-class="customClass"
      :close-on-click-modal="closeOnClickModal"
      :close-on-press-escape="closeOnPressEscape"
      :show-close="showClose"
      :center="center"
      :destroy-on-close="destroyOnClose"
      @close="Shutdown"
    >
      <span slot="title" v-if="titleShow"> </span>
      <slot name="elcontentFK"></slot>
      <span slot="footer">
        <slot name="elfooterFK"></slot>
      </span>
    </el-dialog>
  </div>
</template>
<script lang="ts">
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
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
@Component
export default class eldialogtsxFk extends Vue {
  //visibleSync 打开关闭自定义弹窗
  @Prop({
    type: Boolean,
    default: () => {
      return false;
    },
  })
  public visibleSync!: boolean;
  //titleShow 是否引用组件的title具名 slot
  @Prop({
    type: Boolean,
    default: () => {
      return false;
    },
  })
  public titleShow!: boolean;
  //iswidth 宽度
  @Prop({
    type: String,
    default: () => {
      return "50%";
    },
  })
  public iswidth!: string;
  //fullscreen是否为全屏 Dialog
  @Prop({
    type: Boolean,
    default: () => {
      return false;
    },
  })
  public fullscreen!: boolean;
  // Dialog CSS 中的 margin-top 值
  @Prop({
    type: String,
    default: () => {
      return "15vh";
    },
  })
  public marginTop!: string;
  //modal 是否需要遮罩层
  @Prop({
    type: Boolean,
    default: () => {
      return true;
    },
  })
  public modal!: boolean;
  //modalAppendToBody遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上
  @Prop({
    type: Boolean,
    default: () => {
      return true;
    },
  })
  public modalAppendToBody!: boolean;
  //append-to-body Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true
  @Prop({
    type: Boolean,
    default: () => {
      return false;
    },
  })
  public appendToBody!: boolean;
  //lockScroll 是否在 Dialog 出现时将 body 滚动锁定
  @Prop({
    type: Boolean,
    default: () => {
      return true;
    },
  })
  public lockScroll!: boolean;
  //customClass Dialog 的自定义类名
  @Prop({
    type: String,
    default: () => {
      return "";
    },
  })
  public customClass!: boolean;
  // title  标题
  @Prop({
    type: String,
    default: () => {
      return "提示";
    },
  })
  public title!: boolean;
  //close-on-click-modal 是否可以通过点击 modal 关闭 Dialog
  @Prop({
    type: Boolean,
    default: () => {
      return true;
    },
  })
  public closeOnClickModal!: boolean;
  //close-on-press-escape 是否可以通过按下 ESC 关闭 Dialog
  @Prop({
    type: Boolean,
    default: () => {
      return true;
    },
  })
  public closeOnPressEscape!: boolean;
  //show-close 是否显示关闭按钮
  @Prop({
    type: Boolean,
    default: () => {
      return true;
    },
  })
  public showClose!: boolean;
  //center 是否对头部和底部采用居中布局
  @Prop({
    type: Boolean,
    default: () => {
      return false;
    },
  })
  public center!: boolean;
  //destroy-on-close 关闭时销毁 Dialog 中的元素
  @Prop({
    type: Boolean,
    default: () => {
      return false;
    },
  })
  public destroyOnClose!: boolean;
  //Shutdown 关闭回调
  @Prop({
    type: Function,
    default: () => {
      return "";
    },
  })
  public Shutdown!: Function;

  public isvisible: boolean = false;

  @Watch("visibleSync")
  private visibleSynchange() {
    this.isvisible = this.visibleSync;
  }
}
</script>
<style lang="scss" scoped>
.eldialog {
  width: 100%;

}  
:global(.el-dialog){
    width: 680px;
  }
</style>
