/**
 * @name onresize
 * @author fankai16
 * @Time 2022/04/01
 * @property {number}  elFromwidth  这是usinof 的元素宽度
 * @property {any}  Widthtimer  这是节流
 * @property {boolean} AFold_bus  这是菜单是展开还是收起
 * @function onScreeningClk -点击展开高级筛选初级筛选
 * @description onresize获取浏览器宽度
 **/

import { Aside } from 'element-ui';
import { Component, Vue, Watch } from 'vue-property-decorator';
@Component
export class onresize extends Vue {
  $Maxer: any;
  public Widthtimer: any = null
  public elFromwidth: any = 0
  public AFold_bus: boolean = false
  public onOnreSize(documentIID: string) {
    const that = this;

    window.onresize = () => {
      return (() => {
        (window as any).screenWidth = document.getElementById(documentIID)?.offsetWidth
        that.elFromwidth = (window as any).screenWidth
        if (that.elFromwidth < 715) {
          const vuX = new this.$Maxer();
          const routingJson = vuX.getvuex('routingJson')
          routingJson.AFold = false
          vuX.postvuex('routingJson', routingJson)
          this.$bus.$emit('AFold_bus', false)
        }
      })();
    }
  }
  @Watch('elFromwidth')
  public elFromwidthChange(val: number) {
    if (!this.Widthtimer) {
      this.elFromwidth = val
      this.Widthtimer = true
      const that = this;
      setTimeout(function () {
        that.Widthtimer = false;
      }, 400);
    }
  }
  public onresizeInit(documentIID: string) {
    const vuX = new this.$Maxer();
    const routingJson = vuX.getvuex('routingJson')
    this.AFold_bus = routingJson.AFold
    this.elFromwidth = (window as any).screenWidth = document.getElementById(documentIID)?.offsetWidth
    this.$bus.$on('AFold_bus', (e: boolean) => {
      this.AFold_bus = e
      this.elFromwidth = (window as any).screenWidth = document.getElementById(documentIID)?.offsetWidth
    });
  }
}