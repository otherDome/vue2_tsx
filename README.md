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
