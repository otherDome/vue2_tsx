# 德开医药科技有限公司中台前端框架

___@author 范凯___  
___@email  1038886097@qq.com___  
___@product 盼盼___  
___@email  lianpan66888___  
___@date 2021-11-03 11:05:31___
___@product 赵嘉杰___  
___@email  781043184@qq.com___  
___@product 王雨轩___  
___@date 2021-11-03 11:05:31___

## 原型地址

[产品地址](暂无)

## 兼容性说明

1.IE9以上

<kbd style='color:green'>vueCLI4.12</kbd>
<kbd style='color:green'>vue内核2X</kbd>
<kbd style='color:green'>TS4.1.6</kbd>
<kbd style='color:green'>tsx</kbd>

## 使用文档

├── README.md                   // help
├── public                      // 应用打包模板
│   ├── favicon                 // 网站ICON图标
│   ├── index.html              // 项目打包页
│   ├── robots.txt              // 搜索权限
├── src                         // 项目打包目录
├── ├── api                     // 数据接口
├── ├── assets                  // 静态文件
├── ├── components              // 公用文件
├── ├── composables             // 公用文件内
├── ├── config                  // 项目配置文件
├── ├── locales                 // 地方配置文件
├── ├── model                   // 泛型文件
├── ├── router                  // 路由
├── ├── store                   // 项目核心JS配置
├── ├── views                   // 项目内部模板
├── ├── App.tsx                 // VUE模板配置
├── ├── main.ts                 // VUE模板配置全局
├── ├── registerServiceWorker.ts// 网站项目缓存
├── ├── shims-tsx.d             // TS解析vue模板
├── ├── shims-vue.d             // TS解析vue模板
├── tests                       // 单元格测试配置
├── .gitignore                  // git配置
├── .env.dev.build              // 开发环境_测试包
├── .env.dev.serve              // 开发环境_线上包
├── .env.online.build           // 开发环境_线上打包
├── .env.online.serve           // 开发环境_本地运行线上
├── babel.config.js             // ES6转ES5
├── package-lock.json           // node包目录
├── package.json                // 项目引入包
├── tsconfig.json               // TS的设置配置
├── tslint_backup               // TS模板配置文件
├── vue.config.js               // VUE的webpack配置
└── 无

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve:dev
npm run serve:online
```

### Compiles and minifies for production

```
npm run build:dev
npm run build:online
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
