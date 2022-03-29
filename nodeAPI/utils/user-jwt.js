/**
 * @name user-jwt
 * @author fankai16
 * @Time 2021/12/28
 * @property {module} jwt  引入验证jsonwebtoken模块
 * @property {module} expressJwt 引入express-jwt模块
 * @property {module} PRIVATE_KEY 引入自定义的jwt密钥
 * @function jwtAuth  检验token
 * @function decode   解析token
 * @description jwt  Token 认证
 **/
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const { PRIVATE_KEY } = require('./Statuscode');
const Whitelist = require('../config/jwt_Whitelist.json')
    // 验证token是否过期
const jwtAuth = expressJwt({
    // 设置密钥
    secret: PRIVATE_KEY,
    algorithms: ['HS256'],
    // 设置为true表示校验，false表示不校验
    credentialsRequired: true,
    // 自定义获取token的函数
    getToken: (req) => {
        if (req.headers.authorization) {
            return req.headers.authorization
        } else if (req.query && req.query.token) {
            return req.query.token
        }
    }
}).unless({
    path: Whitelist
})

// jwt-token解析
function decode(req) {
    const token = req.get('Authorization')
    return jwt.verify(token, PRIVATE_KEY);
}

module.exports = {
    jwtAuth,
    decode
}