"use strict";
const {sendMailFun} = require("./server/sendMailFun")

function sendqinghua(){
  sendMailFun('测试插件是否能发送成功')
}
sendqinghua()