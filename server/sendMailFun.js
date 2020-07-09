const nodemailer = require("nodemailer");
const config = require('./config.js')

async function sendMailFun(data){
  // smtp配置信息
  let transporter = nodemailer.createTransport(config);

  // 发送邮件
  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"liyang 👻" <564845354@qq.com>', // sender address
      to: "mkdir_yang@163.com", // list of receivers
      subject: '发送标题✔', // Subject line
      text: data, // plain text body
      html: data // html body
    });

    console.log("Message sent: %s", info);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }catch(err){
    console.log(err)
  }

}

module.exports = {
  sendMailFun
}