/**
 * @name vue.custom.config
 * @author fankai16
 * @Time 2022/02/25
 * @property {JSON} vueDefaultConfig - 项目基础配置项
 * @description vue项目配置项
 **/
let msg = ''
let environment = ''
if (process.env.NODE_ENV === "development") {
    msg = '开发的测试环境'
    environment = '测试环境'
} else if (process.env.NODE_ENV === "production") {
    msg = '开发的是线上环境请谨慎操作非测试库'
    environment = '开发环境请谨慎操作非测试库'
} else if (process.env.NODE_ENV === "online") {
    msg = '开发的是线上环境请谨慎操作非测试库'
    environment = '开发环境请谨慎操作非测试库'
}
const vueAPI = require("./vue.proxy.config.js")
const vueDefaultConfig = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : './',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: true,
    transpileDependencies: process.env.NODE_ENV === "development" ? ["*"] : [],
    //webpack 配置的项目名称
    title: '范凯的TS前端架构-health:当前环境为' + environment,
    titleSeparator: ' - ',
    webpackTitle: '#f40',
    titleReverse: false,
    devPort: '9999',
    abbreviation: 'vt2at',
    quiet: true,
    providePlugin: {},
    build7z: false,
    startMessage: '欢迎使用vue2 CLI4 Node14.17.1 -ts小范同志搭建的框架:注意您当前运行的是' + msg,
    productionSourceMap: false,
    proxy: vueAPI
}
module.exports = vueDefaultConfig