/**
 * @name app.js
 * @author fankai16
 * @Time 2021/12/22
 * @property {module} express   引入主体express模块
 * @property {module} cors      引入cors模块解决跨域问题
 * @property {module} bodyParser 引入body-parser模块解决数据json模式
 * @property {number} port  服务器端口
 * @property {arr} orginList 跨域数组设置
 * @function 
 * @description node入口文件
 **/
var express = require("express");
var app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes')
const port = 3000
app.use(bodyParser.json()); //解析JSON
app.use(bodyParser.urlencoded({ extended: true })); //解析form表单提交的数据application/x-www-form-urlencoded
app.use(cors());
const orginList = require('./config/Crossdomain')
app.all("*", function(req, res, next) {
    if (orginList.includes(req.headers.origin)) {
        //设置允许跨域的域名，*代表允许任意域名跨域
        res.header("Access-Control-Allow-Origin", req.headers.origin);
    } else {
        res.header("Access-Control-Allow-Origin", 'cadwaladerss.com');
    }
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200); //让options尝试请求快速结束
    else
        next();
})
app.use('/', routes);
var server = app.listen(port, function() {
    var port = server.address().port;
    console.log("Start the service", port);
})