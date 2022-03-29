/**
 * @name menuServe.js
 * @author fankai16
 * @Time 2022/03/29
 * @property {module} express   引入主体express模块
 * @function 
 * @description menuServe  用户菜单
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
const {
    CODE_ERROR,
    CODE_SUCCESS,
    PRIVATE_KEY,
    JWT_EXPIRED
} = require('../../utils/Statuscode');

function SQLnavlistZj(item) {
    const query = `select * from navlist_zj where listIDZJ='${item.listID}'`;
    return new Promise(resolve => {
        queryOne(query).then(qs => {
            resolve(qs);
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
    });
}

function findmenu() {
    const query = `select * from navlist`;
    return new Promise(resolve => {
        querySql(query).then(data => {
            resolve(data)
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
    });

}

function navlist_zj(listID) {
    const query = `select * from navlist_zj where listIDZJ='${listID}'`;
    return new Promise(resolve => {
        querySql(query).then(data => {
            resolve(data)
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
    });
}

async function menu(req, res, next) {
    const navlistSQL = await findmenu();
    let datalist = []
    for (let index = 0; index < navlistSQL.length; index++) {
        const DBS = navlistSQL[index]
        const navlistzj = await navlist_zj(navlistSQL[index].listID)
        console.log("navlistzj", navlistzj)
        let datalistJson = {
            name: DBS.name,
            icon: DBS.icon,
            activeicon: DBS.activeicon,
            urlID: DBS.urlID,
            path: DBS.path,
            pathname: DBS.pathname,
            development: DBS.development,
            navlist: navlistzj
        }
        datalist.push(datalistJson)
    }
    res.json({
        code: CODE_SUCCESS,
        msg: '成功',
        data: datalist
    })
}
module.exports = {
    menu
}