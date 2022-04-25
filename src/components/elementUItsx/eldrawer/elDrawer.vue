<template>
  <div class="elDrawer">
    <el-drawer
      :title="title"
      :custom-class="customClass"
      :visible.sync="visibleSync"
      :direction="direction"
      :before-close="beforeClose"
      :close-on-press-escape="closeOonOressEscape"
      :destroy-on-close="destroyOnclose"
      :size="size"
    >
      <slot name="mainbody"> </slot>
    </el-drawer>
  </div>
</template>
<script lang="ts">
/**
 * @name eldialog
 * @author fankai16
 * @Time 2022/04/25
 * @property {boolean}  visibleSync  打开关闭自定义弹窗
 * @property {string}   direction    Drawer 打开的方向
 * @property {string}   title        标题
 * @property {string}   customClass  自定义样式名字
 * @property {function} beforeClose  关闭前的回调
 * @property {function} closeOonOressEscape   是否可以通过按下 ESC 关闭 DraweR
 * @property {function} destroyOnclose  控制是否在关闭 Drawer 之后将子元素全部销毁
 * @description elDrawer  抽屉
 **/
import { Component, Vue, Prop } from "vue-property-decorator"
@Component
export default class eldialogtsxFk extends Vue {
  //visibleSync 打开关闭自定义弹窗
  @Prop({
    type: Boolean,
    default: () => {
      return false
    },
  })
  public visibleSync!: boolean
  //closeOonOressEscape  是否可以通过按下 ESC 关闭 Drawe
  @Prop({
    type: Boolean,
    default: () => {
      return true
    },
  })
  public closeOonOressEscape!: boolean
  //destroyOnclose 控制是否在关闭 Drawer 之后将子元素全部销毁
  @Prop({
    type: Boolean,
    default: () => {
      return true
    },
  })
  public destroyOnclose!: boolean

  @Prop({
    type: String,
    default: () => {
      return ""
    },
  })
  public customClass!: string

  @Prop({
    type: String,
    default: () => {
      return "ttb"
    },
  })
  public direction!: string
  //direction 打开方向
  @Prop({
    type: String,
    default: () => {
      return ""
    },
  })
  public title!: string
  //size Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释
  @Prop({
    type: String,
    default: () => {
      return "100%"
    },
  })
  public size!: string
  //beforeClose  关闭前的回调
  @Prop({
    type: Function,
    default: () => {
      return ""
    },
  })
  public beforeClose!: Function
}
</script>
<style lang="scss">
.dropdownDrawer_s {
}
.el-drawer__header {
  padding: 10px 20px;
  margin-bottom: 0px;
  background: linear-gradient(to bottom, #eef5fb 0%, #e2edfa 100%);
}
</style>
