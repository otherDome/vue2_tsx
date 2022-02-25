

import { Component, Vue } from 'vue-property-decorator';
@Component
export default class App extends Vue {
  protected render() {
    return <div >
      这是首页
      <el-button type="danger" size='mini' >危险按钮</el-button>
    </div>;
  }
}