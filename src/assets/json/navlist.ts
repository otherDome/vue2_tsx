/**
 * @name navlist
 * @author fankai16
 * @Time 2022/03/15
 * @property {arr}  navlist  导航数据列表
 * @property {string}  name  导航名字
 * @property {string}  icon  ICON图标
 * @property {string}  urlID 导航ID
 * @property {string}  path 导航path
 * @property {string}  pathname 导航pathname
 * @property {booler}  development 导航开发状态
 * @function goLogin -登录提交
 * @description 导航数据列表Key
 **/
const navlist = [{
    "name": "首页",
    "icon": require("@/assets/img/nav/home.svg"),
    "urlID": "",
    "path": "/",
    "pathname": "",
    "development": false,
    "navlist": [{
        "name": "首页",
        "icon": "",
        "urlID": "",
        "path": "/",
        "pathname": "",
        "development": false
    }]
},
{
    "name": "用户管理",
    "icon": require("@/assets/img/nav/Usermanagement.svg"),
    "urlID": "",
    "path": "",
    "pathname": "1",
    "development": false,
    "navlist": []
},
{
    "name": "数据报表",
    "icon":require("@/assets/img/nav/tablereport.svg"),
    "urlID": "",
    "path": "",
    "pathname": "2",
    "development": false,
    "navlist": []
},
{
    "name": "商品维护",
    "icon": require("@/assets/img/nav/goodsShps.svg"),
    "urlID": "",
    "path": "",
    "pathname": "3",
    "development": false,
    "navlist": []
},
{
    "name": "权限管理",
    "icon": require("@/assets/img/nav/permissions.svg"),
    "urlID": "",
    "path": "",
    "pathname": "4",
    "development": false,
    "navlist": []
}
]


module.exports = navlist