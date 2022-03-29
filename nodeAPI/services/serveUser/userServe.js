/**
 * @name app.js
 * @author fankai16
 * @Time 2021/12/22
 * @property {module} express   引入主体express模块
 * @function 
 * @description userServe  用户模块
 **/

/**
 * @api {post} /api/login 用户登录
 * @apiGroup user
 * @apiDescription 用于用户登录接口
 * @apiParam {String} username 用户名
 * @apiParam {String} password 密码
 * @apiError {String} msg 错误信息
 * @apiErrorExample  {json} error-example
 * { 
 *   "code":"1"
 *   "msg": "用户名不存在"
 * }
 * @apiSuccess {String} username 用户名
 * @apiSuccess {String} password 密码
 */

const { querySql, queryOne } = require('../../utils/index');
const md5 = require('../../utils/md5');
const jwt = require('jsonwebtoken');
const boom = require('boom');
const { body, validationResult } = require('express-validator');
const {
    CODE_ERROR,
    CODE_SUCCESS,
    PRIVATE_KEY,
    JWT_EXPIRED
} = require('../../utils/Statuscode');

function login(req, res, next) {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        const merrore = '请传入必要参数,username,password';
        res.json({
            code: CODE_ERROR,
            msg: merrore,
        })
        res.end()
    } else {
        let { username, password } = req.body;
        password = md5(password);
        const query = `select * from sys_user where name='${username}' and pwd='${password}'`;
        querySql(query).then(user => {
            console.log('用户登录===', user);
            if (!user || user.length === 0) {
                res.json({
                    code: CODE_ERROR,
                    msg: '用户名或密码错误',
                    data: null
                })
            } else {
                // 登录成功， 签发一个token并返回给前端
                const token = jwt.sign(
                    // payload：签发的 token 里面要包含的一些数据。
                    { username },
                    // 私钥
                    PRIVATE_KEY,
                    // 设置过期时间
                    { expiresIn: JWT_EXPIRED }
                )
                let userData = {
                    id: user[0].id,
                    username: user[0].name,
                    nickname: '开发测试账号',
                    avator: null,
                    sex: 0
                };
                res.json({
                    code: CODE_SUCCESS,
                    msg: '登录成功',
                    data: {
                        token,
                        userData
                    }
                })
            }
        }).catch((err) => {
            const masg = ''
            if (nodeConfig.environment === 'text') {
                masg = err.sqlMessage
            }
            res.json({
                code: CODE_ERROR,
                msg: '服务器内部错误' + masg,
                data: null
            })
            res.end()
        });
    }
}
module.exports = {
    login
}