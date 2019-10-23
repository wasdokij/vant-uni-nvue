# vun-popup 

 > Popup 弹出层，支持上下左右四个方向面板弹出
 
### 规则
- 常用于筛选面板组件的包裹组件
- 从顶部或底部浮出的模态，点击蒙层进行关闭
- 支持使用者主动关闭

<img src="/unpackage/gif/popup.gif?raw=true" width="240"/>

## 使用方法

```vue
<template>
	<view class="page">
		<div @click="onShow">点击弹出底部面板</div>
		<vun-popup :show="show" @close="close" position="bottom" height="400"></vun-popup>
	</view>
</template>
<script>
	import VunPopup from '@/components/vun-popup'
	export default {
		components: {
			VunPopup
		},
		data() {
			return {
				show: false,
			}
		},
		methods: {
			onShow() {
				this.show = true
			},
			close(e) {
				this.show = false
			}
		}
	}
</script>
```

更详细代码可以参考 [demo]()

### 可配置参数

| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| show | `Boolean` |`Y`|`false` | 开启打开popup  |
| position | `String` | `N`|`bottom` | 出来位置`top`/`bottom`/`left`/`right`|
| height | `String` |`N`| `840` | 弹出层的高度(向上向下时候设置)  |
| width | `String` |`N`| `750` | 弹出层的宽度(向左向右时候设置)  |
| popup-color | `String` |`N`| `#FFFFFF` | 弹出层的颜色 |
| stand-out | `Number` |`N`| `0` | 突出边框高度 |
| animation | `Object` |`N`| `{timingFunction: 'ease-in'}` | 自定义面板动画 |
| overlay-cfg | `Object` |`N`| `{}` | [vun-overlay]()配置参数|

### 事件回调

```
// 需要在`@close`中设置面板关闭。
```

### 调用关闭

```
在vun-popup上面绑定ref，然后调用this.$refs.vunPopup.hide();即可关闭，常用于侧滑筛选面板
```
