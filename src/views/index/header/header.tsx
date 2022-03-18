import { Component, Vue } from 'vue-property-decorator';
import style from '@/assets/styles/index/header/header.module.scss';
@Component
export default class App extends Vue {
  protected render() {
    return <div class={style.header}>
      <div class={style.header_top}>
        头部的头部
      </div>
      <div class={style.header_bottom}>
        头部的底部
      </div>
    </div>
  }
}
