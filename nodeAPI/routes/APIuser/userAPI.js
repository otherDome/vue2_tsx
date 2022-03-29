/**
 * @name userAPI
 * @author fankai16
 * @Time 2021/12/28
 * @property {module}  mysql  数据库模块
 * @property {object}  config 数据库链接对象
 * @property {module}  userRouter // 引入user路由模块
 * @property {serious} vaildator  登录注册严重
 * @property {module}  service // 引入数据库逻辑
 * @description 登录模块路由
 **/
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const service = require('../../services/serveUser/userServe');

// 登录/注册校验
const vaildator = [
    body('username').isString().withMessage('用户名类型错误'),
    body('password').isString().withMessage('密码类型错误')
]

router.post('/login', vaildator, service.login);
module.exports = router;