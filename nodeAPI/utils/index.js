/**
 * @name index
 * @author fankai16
 * @Time 2021/12/28
 * @property {module}  mysql  数据库模块
 * @property {object}  config 数据库链接对象
 * @function querySql  数据库链接开启
 * @function queryOne  查询一条sql语句
 * @function connect   数据链接内
 * @description 数据链接封装
 **/

const mysql = require('mysql');
const config = require('../db/dbConfig');

function connect() {
    const { host, user, password, database } = config;
    return mysql.createConnection({
        host,
        user,
        password,
        database
    })
}
// 新建查询连接
function querySql(sql) {
    const conn = connect();
    return new Promise((resolve, reject) => {
        try {
            conn.query(sql, (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            })
        } catch (e) {
            reject(e);
        } finally {
            // 释放连接
            conn.end();
        }
    })
}

function queryOne(sql) {
    return new Promise((resolve, reject) => {
        querySql(sql).then(res => {
            console.log('res===', res)
            if (res && res.length > 0) {
                resolve(res[0]);
            } else {
                resolve(null);
            }
        }).catch(err => {
            reject(err);
        })
    })
}
module.exports = {
    querySql,
    queryOne
}