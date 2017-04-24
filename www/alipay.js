var exec = require('cordova/exec');

var alipay = {
  payV2: function(arg0, success, error) {
    exec(success, error, "alipay", "payV2", [arg0]);
  }
}

window.plugins = window.plugins || {};
window.plugins.alipay = alipay;

exports.payV2 = alipay.payV2