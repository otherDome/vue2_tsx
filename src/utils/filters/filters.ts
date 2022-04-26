/**
 * @name filters
 * @author fankai16
 * @Time 2022/03/17
 * @namespace  全局过滤器
 * @function roteraRR -数组过滤器
 * @function jsGetAge -生日判断多少岁
 * @description 全局数组过滤
 **/
class filters {
  roteraRR(arr: any,type:any) {
    const res = new Map();
    return arr.filter((arr: any) => !res.has(arr[type]) && res.set(arr[type], 1));
  }
  /*根据出生日期算出年龄*/
  jsGetAge(strBirthday: any) {
    if (strBirthday===null) {
        return '未知'
    }
    var returnAge;
    var strBirthdayArr = strBirthday.split("-");
    var birthYear = strBirthdayArr[0];
    var birthMonth = strBirthdayArr[1];
    var birthDay = strBirthdayArr[2];
    var d: any
    d = new Date() as any;
    var nowYear = d.getFullYear();
    var nowMonth = d.getMonth() + 1;
    var nowDay = d.getDate();
    if (nowYear == birthYear) {
      returnAge = 0;//同年 则为0岁
    }
    else {
      var ageDiff = nowYear - birthYear; //年之差
      if (ageDiff > 0) {
        if (nowMonth == birthMonth) {
          var dayDiff = nowDay - birthDay;//日之差
          if (dayDiff < 0) {
            returnAge = ageDiff - 1;
          }
          else {
            returnAge = ageDiff;
          }
        }
        else {
          var monthDiff = nowMonth - birthMonth;//月之差
          if (monthDiff < 0) {
            returnAge = ageDiff - 1;
          }
          else {
            returnAge = ageDiff;
          }
        }
      }
      else {
        returnAge = -1;//返回-1 表示出生日期输入错误 晚于今天
      }
    }
    return returnAge;//返回周岁年龄
  }

}
export default new filters();