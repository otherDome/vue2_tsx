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
    "urlID": "1",
    "path": "/",
    "pathname": "",
    "development": false,
    "navlist": [
        {
            "name": "首页啦啦啦",
            "icon": "",
            "urlID": "1-1",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": [
                {
                    "name": "首页1",
                    "icon": "",
                    "urlID": "1-1-1",
                    "path": "/",
                    "pathname": "",
                    "development": false,
                    "navlist":[]
                },
                {
                    "name": "首页2",
                    "icon": "",
                    "urlID": "1-1-2",
                    "path": "/",
                    "pathname": "",
                    "development": false,
                    "navlist":[]
                },
            ]
        },
        {
            "name": "首页啦啦啦1",
            "icon": "",
            "urlID": "1-2",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": [
                {
                    "name": "首页1",
                    "icon": "",
                    "urlID": "1-1-1",
                    "path": "/",
                    "pathname": "",
                    "development": false,
                    "navlist":[]
                },
                {
                    "name": "首页2",
                    "icon": "",
                    "urlID": "1-1-2",
                    "path": "/",
                    "pathname": "",
                    "development": false,
                    "navlist":[]
                },
            ]
        },
    ]
},
{
    "name": "用户管理",
    "icon": require("@/assets/img/nav/Usermanagement.svg"),
    "urlID": "2",
    "path": "",
    "pathname": "1",
    "development": false,
    "navlist": [
        {
            "name": "用户分配",
            "icon": "",
            "urlID": "2-2",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "客户追踪",
            "icon": "",
            "urlID": "",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "用户服务",
            "icon": "",
            "urlID": "",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "今日任务",
            "icon": "",
            "urlID": "",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "用户付费",
            "icon": "",
            "urlID": "",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        }
    ]
},
{
    "name": "数据报表",
    "icon": require("@/assets/img/nav/tablereport.svg"),
    "urlID": "",
    "path": "",
    "pathname": "2",
    "development": false,
    "navlist": [
        {
            "name": "业绩汇总",
            "icon": "",
            "urlID": "",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "商品报表",
            "icon": "",
            "urlID": "",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "复购报表",
            "icon": "",
            "urlID": "",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "微信报表",
            "icon": "",
            "urlID": "",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "随访记录",
            "icon": "",
            "urlID": "",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "公众号报表",
            "icon": "",
            "urlID": "",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        }
    ]
},
{
    "name": "商品维护",
    "icon": require("@/assets/img/nav/goodsShps.svg"),
    "urlID": "",
    "path": "",
    "pathname": "3",
    "development": false,
    "navlist": [
        {
            "name": "商品维护",
            "icon": "",
            "urlID": "",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "返利维护",
            "icon": "",
            "urlID": "",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        }
    ]
},
{
    "name": "权限管理",
    "icon": require("@/assets/img/nav/permissions.svg"),
    "urlID": "",
    "path": "",
    "pathname": "4",
    "development": false,
    "navlist": [
        {
            "name": "角色管理",
            "icon": "",
            "urlID": "",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "账户管理",
            "icon": "",
            "urlID": "",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "菜单管理",
            "icon": "",
            "urlID": "",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "部门管理",
            "icon": "",
            "urlID": "",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "微信配置",
            "icon": "",
            "urlID": "",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "黑名单",
            "icon": "",
            "urlID": "",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        }
    ]
}
]


module.exports = navlist