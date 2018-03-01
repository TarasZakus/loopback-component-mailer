module.exports = function (options) {
  var nodemailer = require('nodemailer')
  var transporter = nodemailer.createTransport(options)

  return {
    send: function (data, callback) {
      transporter.sendMail(data, callback)
    }
  }
}
