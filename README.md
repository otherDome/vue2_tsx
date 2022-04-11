# text

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


 <!-- 这是登录
      <el-form ref="form" props={{
        model: this.elProps
      }} label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model={this.nakcname} placeholder="请输入内容"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="danger" onClick={this.logs.bind(this)}>危险按钮</el-button> -->




slot-scope={{
                scope: (scope: any) => {
                  console.log("zxcvb", scope)
                  return <div>
                    <el-button type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>

                  </div>
                }
              }}



        <el-table-column show-overflow-tooltip type="selection" width="55"></el-table-column>
        <el-table-column show-overflow-tooltip label="详情" :show-header="false" type="expand">
          <template slot-scope="scope">
            <div style="padding: 0 15px 15px 15px; box-sizing: border-box">
              <h6 style="padding: 8px 0; box-sizing: border-box">编号:12987123</h6>
              <el-descriptions class="margin-top" :column="3" size="mini" border>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-user"></i>
                    用户名
                  </template>
                  kooriookami
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-mobile-phone"></i>
                    手机号
                  </template>
                  18100000000
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-location-outline"></i>
                    居住地
                  </template>
                  苏州市
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-tickets"></i>
                    备注
                  </template>
                  <el-tag size="small">学校</el-tag>
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-office-building"></i>
                    联系地址
                  </template>
                  江苏省苏州市吴中区吴中大道 1188 号
                </el-descriptions-item>
              </el-descriptions>
            </div>
          </template>
        </el-table-column>
        <el-table-column show-overflow-tooltip prop="id" label="ID" width="100"></el-table-column>
        <el-table-column
          show-overflow-tooltip
          :show-header="false"
          label="姓名"
        > 
        <!--:render-header="atteLeavetooltip"-->
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column show-overflow-tooltip prop="amount1" sortable label="数值 1"></el-table-column>
        <el-table-column show-overflow-tooltip prop="amount2" sortable label="数值 2"></el-table-column>
        <el-table-column show-overflow-tooltip prop="amount3" sortable label="数值 3"></el-table-column>
        <el-table-column show-overflow-tooltip prop="amount4" sortable label="数值 4"></el-table-column>
        <el-table-column show-overflow-tooltip prop="amount5" sortable label="数值 5"></el-table-column>
        <el-table-column show-overflow-tooltip prop="amount6" sortable label="数值 6"></el-table-column>
        <el-table-column show-overflow-tooltip prop="amount7" sortable label="数值 7"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="mini" class="btmmini">查看</el-button>
            <el-button type="text" size="mini" class="btmmini">编辑</el-button>
          </template>
        </el-table-column>





/deep/.el-table {
		 border: 0;
		 th,
		 tr,
		 td{
			  border: 0;
			  background-color: #fff;
		 }
		 &::before {
			  height: 0px;
		  }
		  &::after {
			 width: 0;
		  }
		 .el-table__fixed:before {
			 height: 0;
		  }
	 }
