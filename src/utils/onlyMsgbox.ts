/**
 * @name onlyMsgbox
 * @author fankai16
 * @Time 2021/10/12
 * @namespace   ElMessage
 * @function success -成功
 * @function warning -警告
 * @function info -信息
 * @function error  -错误
 * @description element-plus  Message多次弹窗处理
 **/
 import  { Message }  from 'element-ui'
 class OnlyMessage {
   success(options:any) {
     if (document.getElementsByClassName('el-message--success').length === 0) {
      Message.success({
           message: options,
           type: 'success'
         })
     }
   }
   warning(options:any) {
     if (document.getElementsByClassName('el-message--warning').length === 0) {
      Message.warning({
         message: options,
         type: 'warning'
       })
     }
   }
   info(options:any) {
     if (document.getElementsByClassName('el-message--info').length === 0) {
      Message.info({
         message: options,
         type: 'info'
       })
     }
   }
   error(options:any) {
     if (document.getElementsByClassName('el-message--error').length === 0) {
      Message.error({
         message: options,
         type: 'error'
       })
     }
   }
 }
 export default new OnlyMessage()
 