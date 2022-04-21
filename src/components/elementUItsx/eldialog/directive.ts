// 引入拖拽js
import { startDrag } from '@/components/elementUItsx/eldialog/drag'

/**
 * 为el-dialog弹框增加拖拽功能
 * @param {*} el 指定dom
 * @param {*} binding 绑定对象
 * desc   只要用到了el-dialog的组件，都可以通过增加v-draggable属性变为可拖拽的弹框
 */

const draggable:any = (el:any, binding:any) => {
  // 绑定拖拽事件 [绑定拖拽触发元素为弹框头部、拖拽移动元素为整个弹框]
  startDrag(
    el.querySelector('.el-dialog__header'),
    el.querySelector('.el-dialog'),
    binding.value
  );
};

const directives:any = {
  draggable,
};
// 这种写法可以批量注册指令
export default {
  install(Vue:any) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};