/**
 * @name menuAPI
 * @author fankai16
 * @Time 2022/03/29
 * @property {module}  mysql  数据库模块
 * @property {object}  config 数据库链接对象
 * @property {module}  userRouter // 引入user路由模块
 * @property {module}  service // 引入数据库逻辑
 * @description 登录模块路由
 **/
const express = require('express');
const router = express.Router();
const service = require('../../services/servemenu/menuServe');
router.get('/menu', service.menu);
module.exports = router;