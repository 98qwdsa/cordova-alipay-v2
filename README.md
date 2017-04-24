# cordova-alipay-v2

1. 针对最新支付宝支付流程，服务端返回订单信息。
2. 只支持安卓，希望有懂ios的朋友一起维护

   `1.git clone https://github.com/98qwdsa/cordova-alipay-v2`

   `2.cordova plugin add 98qwdsa-alipay`

   `3.window.plugins.alipay.payV2(orderInfo, data => {
		//success     
	  }, error => {
		//error
	  })`