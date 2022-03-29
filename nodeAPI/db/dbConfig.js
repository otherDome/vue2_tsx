/**
 * @name dbConfig
 * @author fankai16
 * @Time 2021/12/28
 * @property {object}  mysql  数据库出口文件
 * @property {object,host}  mysql.host   主机名称，一般是本机
 * @property {object,number}  mysql.port   数据库端口
 * @property {object,string}  mysql.user   数据库名字
 * @property {object,string}  mysql.database   数据库密码
 * @property {object,number}  mysql.connectTimeout   数据库超时设置
 * @description 数据库入口文件mysql
 **/
const mysql = {
    host: '101.42.224.36', // 主机名称，一般是本机
    port: 3306, // 数据库的端口号，如果不设置，默认是3306
    user: 'health', // 创建数据库时设置用户名
    password: '88120078fk', // 创建数据库时设置的密码
    database: 'health', // 创建的数据库
    connectTimeout: 5000 // 连接超时
}

module.exports = mysql;