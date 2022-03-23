import { Component, Vue } from 'vue-property-decorator';
@Component
export default class App extends Vue {
  protected mounted() {

  }
  protected sssss: string = '123'
  protected Therefresh() {
    this.sssss = '456'
  }
  protected render() {
    return <div>
      这是主要home
      <span onClick={this.Therefresh.bind(this)}>{this.sssss}</span>
    </div>
  }
}