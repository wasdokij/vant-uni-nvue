let cache = null;

function getSafeArea() {
	return new Promise((resolve, reject) => {
		if (cache != null) {
			resolve(cache);
		} else {
			uni.getSystemInfo({
				success: ({ model, screenHeight, statusBarHeight }) => {
					const iphoneX = /iphone x/i.test(model);
					const iphoneNew = /iPhone11/i.test(model) && screenHeight === 812;
					cache = {
						isIPhoneX: iphoneX || iphoneNew,
						statusBarHeight
					};
					resolve(cache);
				},
				fail: reject
			});
		}
	});
}

export const safeArea = function ({ safeAreaInsetBottom = true, safeAreaInsetTop = false } = {}) {
	return {
		props: {
			safeAreaInsetTop: {
				type: Boolean,
				default: safeAreaInsetTop
			},
			safeAreaInsetBottom: {
				type: Boolean,
				default: safeAreaInsetBottom
			}
		},
		created() {
			getSafeArea().then(({ isIPhoneX, statusBarHeight }) => {
				this.isIPhoneX = isIPhoneX
				this.statusBarHeight = statusBarHeight
			});
		}
	}
}
