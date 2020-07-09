"use strict";
const https = require("https")
const iconv = require("iconv-lite");  
const {sendMailFun} = require("./server/sendMailFun")

// 请求一言网站接口
function yiyanApi(){
  return new Promise(function(resolve, reject){
    https.get('https://v1.hitokoto.cn', function(res) { 
      var datas = [];  
      var size = 0;  
      res.on('data', function (data) {  
          datas.push(data);  
          size += data.length;  
      });  
      res.on("end", function () {  
          var buff = Buffer.concat(datas, size);  
          var result = iconv.decode(buff, "utf8");//转码//var result = buff.toString();//不需要转编码,直接tostring  
          console.log(result)
          resolve(result);  
      });  
    }).on("error", function (err) {  
      Logger.error(err.stack)  
      callback.apply(null);  
    });  
  })
}

function sendyiyan(){
  yiyanApi().then(function(res){
    if(res){
      let data = JSON.parse(res)
      console.log(data)
      sendMailFun(data.hitokoto);
    }
  })
}

sendyiyan()


// {
//   "id": 4231,
//   "hitokoto": "当你手里有锤子，那么敌人就是钉子。",
//   "type": "c",
//   "from": "守望先锋",
//   "creator": "smallxu",
//   "created_at": "1547741307"
// }