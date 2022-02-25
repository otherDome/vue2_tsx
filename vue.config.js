const { resolve } = require("path");
const path = require("path");
const WebpackBar = require("webpackbar");
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const dayjs = require("dayjs");
const time = dayjs().format("YYYY-M-D HH:mm:ss");
process.env.VUE_APP_UPDATE_TIME = time;
const { merge } = require('webpack-merge')
const tsImportPluginFactory = require('ts-import-plugin')
require('events').EventEmitter.defaultMaxListeners = 0;
const {
    publicPath,
    assetsDir,
    outputDir,
    lintOnSave,
    transpileDependencies,
    title,
    webpackTitle,
    devPort,
    quiet,
    startMessage,
    productionSourceMap,
    proxy
} = require("./src/config/vue.custom.config");
module.exports = {
    productionSourceMap,
    publicPath,
    assetsDir,
    outputDir,
    lintOnSave,
    transpileDependencies,
    parallel: false,
    css: {
        modules: true // 开启CSS module
    },
    devServer: {
        hot: true,
        host: 'text.health.365care.com',
        port: devPort,
        open: true,
        noInfo: false,
        overlay: {
            warnings: true,
            errors: true
        },
        quiet: quiet,
        proxy: proxy
    },
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "scss",
            patterns: [path.resolve(__dirname, "src/assets/styles/Setupthe.scss")]
        }
    },
    chainWebpack: config => {
        config.module
            .rule('ts')
            .use('ts-loader')
            .tap((options) => {
                options = merge(options, {
                        transpileOnly: true,
                        getCustomTransformers: () => ({
                            before: [
                                tsImportPluginFactory({
                                    libraryName: 'vant',
                                    libraryDirectory: 'es',
                                    style: true,
                                }),
                            ],
                            compilerOptions: {
                                module: 'es2015',
                            },
                        }),
                    })
                    // 返回修改后的选项配置。
                return options
            })
    },
    configureWebpack(config) {
        if (process.env.NODE_ENV === 'production') {
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        }
        return {
            resolve: {
                alias: {
                    "@": resolve("src"),
                    "*": resolve(""),
                    Assets: resolve("src/assets")
                },
                extensions: ['.js', '.ts', '.vue', '.json', ".tsx"]
            },
            plugins: [
                new FriendlyErrorsPlugin({
                    compilationSuccessInfo: {
                        notes: [startMessage],
                        clearConsole: true
                    }
                }),
                new WebpackBar({
                    name: title,
                    color: webpackTitle,
                }),
            ]
        };
    },
    pwa: {
        name: 'health系统'
    }
}