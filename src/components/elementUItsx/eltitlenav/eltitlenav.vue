<template>
  <div class="eltitlenav">
    <div class="eltitlenav_left">
      <div class="shugun"></div>
      <div>{{ masTitle }}</div>
    </div>
    <div class="eltitlenav_right">
      <slot name="eltitlenavBtn"> </slot>
    </div>
  </div>
</template>
<script lang="ts">
/**
 * @name eltitlenav
 * @author fankai16
 * @Time 2022/04/25
 * @property {string}  masTitle  标题名字
 * @description eltitlenav  标题样式
 **/
import { Component, Vue, Prop } from "vue-property-decorator"
@Component
export default class eltitlenav extends Vue {
  @Prop({
    type: String,
    default: () => {
      return "请输入名字"
    },
  })
  public masTitle!: string
}
</script>
<style lang="scss" scoped>
.eltitlenav {
  width: 100%;
  display: flex;
  .eltitlenav_left {
    width: 50%;
    display: flex;
    line-height: 28px;
    .shugun {
      border-left: 3px solid #409eff;
      margin-right: 5px;
      margin-top: 2px;
    }
  }
  .eltitlenav_right {
    width: 50%;
    text-align: right;
  }
}
</style>
