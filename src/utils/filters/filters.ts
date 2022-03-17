/**
 * @name filters
 * @author fankai16
 * @Time 2022/03/17
 * @namespace  全局过滤器
 * @function roteraRR -数组过滤器
 * @description 全局数组过滤
 **/
class filters { 
  roteraRR(arr:any) {
    const res = new Map();
    return arr.filter((arr:any) => !res.has(arr.urlID) && res.set(arr.urlID, 1));
   }
}
export default new filters();