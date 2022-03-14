import { Component, Vue } from 'vue-property-decorator';
import style from '@/assets/styles/index/Themenu/themenu.module.scss';
@Component
export default class App extends Vue {
  private mounted() {

  }
  protected render() {
    return <div class={style.themenu}>
      <div class={style.themenu_box}>
        <div class={style.themenu_boxleft}>
          <div class={style.themenu_boxleft_top}>

          </div>
        </div>
        <div class={style.themenu_boxright}>
          654
        </div>

      </div>

    </div>;
  }
}