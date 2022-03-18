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
    "activeicon":'',
    "urlID": "1",
    "path": "/",
    "pathname": "",
    "development": false,
    "navlist": [
        {
            "name": "首页",
            "icon": require("@/assets/img/nav/index/home.svg"),
            "activeicon":require("@/assets/img/nav/index/home_active.svg"),
            "urlID": "1-1",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        }, 
    ]
},
{
    "name": "用户管理",
    "icon": require("@/assets/img/nav/Usermanagement.svg"),
    "activeicon":"",
    "urlID": "2",
    "path": "",
    "pathname": "1",
    "development": false,
    "navlist": [
        {
            "name": "用户分配",
            "icon": require("@/assets/img/nav/user/fenpei.svg"),
            "activeicon":require("@/assets/img/nav/user/fenpei_active.svg"),
            "urlID": "2-1",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "客户追踪",
            "icon": require("@/assets/img/nav/user/zhuizong.svg"),
            "activeicon":require("@/assets/img/nav/user/zhuizong_active.svg"),
            "urlID": "2-2",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "用户服务",
            "icon": require("@/assets/img/nav/user/fuwu.svg"),
            "activeicon":require("@/assets/img/nav/user/fuwu_active.svg"),
            "urlID": "2-3",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "今日任务",
            "icon":  require("@/assets/img/nav/user/renwu.svg"),
            "activeicon":require("@/assets/img/nav/user/renwu_active.svg"),
            "urlID": "2-4",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "用户付费",
            "icon": require("@/assets/img/nav/user/xiaofei.svg"),
            "activeicon":require("@/assets/img/nav/user/xiaofei_active.svg"),
            "urlID": "2-5",
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
    "activeicon":"",
    "urlID": "3",
    "path": "",
    "pathname": "2",
    "development": false,
    "navlist": [
        {
            "name": "业绩汇总",
            "icon": require("@/assets/img/nav/data/yeji.svg"),
            "activeicon":require("@/assets/img/nav/data/yeji_active.svg"),
            "urlID": "3-1",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "商品报表",
            "icon":  require("@/assets/img/nav/data/shangpin.svg"),
            "activeicon": require("@/assets/img/nav/data/shangpin_active.svg"),
            "urlID": "3-2",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "复购报表",
            "icon":  require("@/assets/img/nav/data/fugo.svg"),
            "activeicon":require("@/assets/img/nav/data/fugo_active.svg"),
            "urlID": "3-3",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "微信报表",
            "icon": require("@/assets/img/nav/data/wxbb.svg"),
            "activeicon":require("@/assets/img/nav/data/wxbb_active.svg"),
            "urlID": "3-4",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "随访记录",
            "icon": require("@/assets/img/nav/data/suifang.svg"),
            "activeicon":require("@/assets/img/nav/data/suifang_active.svg"),
            "urlID": "3-5",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "公众号报表",
            "icon": require("@/assets/img/nav/data/gongzhonghao.svg"),
            "activeicon":require("@/assets/img/nav/data/gongzhonghao_active.svg"),
            "urlID": "3-6",
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
    "activeicon":"",
    "urlID": "4",
    "path": "",
    "pathname": "3",
    "development": false,
    "navlist": [
        {
            "name": "商品维护",
            "icon": require("@/assets/img/nav/goods/gouwuce.svg"),
            "activeicon":require("@/assets/img/nav/goods/gouwuce_active.svg"),
            "urlID": "4-1",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "返利维护",
            "icon": require("@/assets/img/nav/goods/fanli.svg"),
            "activeicon":require("@/assets/img/nav/goods/fanli_active.svg"),
            "urlID": "4-2",
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
    "activeicon":"",
    "urlID": "5",
    "path": "",
    "pathname": "4",
    "development": false,
    "navlist": [
        {
            "name": "角色管理",
            "icon": require("@/assets/img/nav/permissions/quanxian.svg"),
            "activeicon":require("@/assets/img/nav/permissions/quanxian_active.svg"),
            "urlID": "5-1",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "账户管理",
            "icon": require("@/assets/img/nav/permissions/zhanghu.svg"),
            "activeicon":require("@/assets/img/nav/permissions/zhanghu_active.svg"),
            "urlID": "5-2",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "菜单管理",
            "icon": require("@/assets/img/nav/permissions/caidan.svg"),
            "activeicon":require("@/assets/img/nav/permissions/caidan_active.svg"),
            "urlID": "5-3",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "部门管理",
            "icon": require("@/assets/img/nav/permissions/bumen.svg"),
            "activeicon":require("@/assets/img/nav/permissions/bumen_active.svg"),
            "urlID": "5-4",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "微信配置",
            "icon": require("@/assets/img/nav/permissions/peizhi.svg"),
            "activeicon":require("@/assets/img/nav/permissions/peizhi_active.svg"),
            "urlID": "5-5",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        },
        {
            "name": "黑名单",
            "icon": require("@/assets/img/nav/permissions/heimingdan.svg"),
            "activeicon":require("@/assets/img/nav/permissions/heimingdan_actvie.svg"),
            "urlID": "5-6",
            "path": "/",
            "pathname": "",
            "development": false,
            "navlist": []
        }
    ]
}
]


module.exports = navlist