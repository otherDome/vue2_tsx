const plugins = ["@vue/babel-plugin-transform-vue-jsx"]
const vant = ['import', {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
    }, 'vant']
    // const element = [
    //     "component",
    //     {
    //         "libraryName": "element-ui",
    //         "styleLibraryName": "theme-chalk"
    //     }
    // ]
plugins.push(vant)
    // plugins.push(element)
if (process.env.NODE_ENV === 'production') {
    plugins.push("transform-remove-console")
}
module.exports = {
    presets: [
        ["@vue/cli-plugin-babel/preset", { useBuiltIns: "entry", }]
    ],
    plugins: plugins
}