var isIPhoneX = null;

function getIsIPhoneX() {
  return new Promise(function (resolve, reject) {
    if (isIPhoneX !== null) {
      resolve(isIPhoneX);
    } else {
      wx.getSystemInfo({
        success: function success(_ref) {
          var model = _ref.model,
              screenHeight = _ref.screenHeight;
          var iphoneX = /iphone x/i.test(model);
          var iphoneNew = /iPhone11/i.test(model) && screenHeight === 812;
          isIPhoneX = iphoneX || iphoneNew;
          resolve(isIPhoneX);
        },
        fail: reject
      });
    }
  });
}

export var iphonex = {
  props: {
    safeAreaInsetBottom: {
      type: Boolean,
      default: true
    },
		isIPhoneX: {
			type: Boolean,
			default: false
    }
  },
  created: function created() {
    getIsIPhoneX().then((isIPhoneX) => {
			this.isIPhoneX = isIPhoneX
    });
  }
};