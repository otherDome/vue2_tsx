const vueAPI = {
    '/online': {
        target: 'http://healthapi.dkyao.com', //线上地址
        changeOrigin: true,
        // secure: false, // 将安全设置为false,才能访问https开头的
        pathRewrite: {
            '^/online': ''
        }
    }
}
module.exports = vueAPI