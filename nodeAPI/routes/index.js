/**
 * @name routes
 * @author fankai16
 * @Time 2021/12/28
 * @property {module}  mysql  数据库模块
 * @property {object}  config 数据库链接对象
 * @property {module}  userAPI // 登录API
 * @property {module}  menuAPI // 菜单API
 * @description 路由配置文件
 **/
const express = require('express');
const userAPI = require('./APIuser/userAPI');
const menuAPI = require('./APImenu/menuAPI');

const apiList = require('../config/apiList')
const nodeConfig = require('../config/node.config')

const router = express.Router(); // 注册路由 
const { jwtAuth, decode } = require('../utils/user-jwt');

router.use(jwtAuth); // 注入认证模块
router.use('/api', userAPI); // 注入登录模块
router.use('/api', menuAPI); // 注入菜单模块


// 自定义统一异常处理中间件，需要放在代码最后
router.use((err, req, res, next) => {
    console.log('resresres===', req.originalUrl);
    // 自定义用户认证失败的错误返回
    if (apiList.includes(req.originalUrl)) {
        if (err && err.name === 'UnauthorizedError') {
            const { status = 401, message } = err;
            // 抛出401异常
            res.status(status).json({
                code: status,
                msg: 'token失效，请重新登录',
                data: null
            })
        } else {
            const { output } = err || {};
            // 错误码和错误信息
            const errCode = (output && output.statusCode) || 500;
            const errMsg = (output && output.payload && output.payload.error) || err.message;
            res.status(errCode).json({
                code: errCode,
                msg: errMsg
            })
        }
    } else {
        console.log("当前环境为", nodeConfig)
        if (nodeConfig.environment === 'text') {
            res.status(404).send('NO 404 请仔细检测接口路径')
        } else if (nodeConfig.environment === 'online') {
            res.status(404).send(req.originalUrl + '404')
        }

    }

})

module.exports = router;