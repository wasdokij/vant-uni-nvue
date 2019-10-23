# vun-overlay 

 > 蒙层组件
 
### 规则
常用于 vun-mask、vun-dialog、vun-popup 等的基础蒙层组件

<img src="/unpackage/gif/overlay.gif?raw=true" width="240"/>

## 使用方法

```vue
<template>
	<view class="page">
		<div @click="onClickShow">显示遮罩层</div>
		<vun-overlay ref="vunPopup" :show="show" opacity="0.7" @transitionEnd="transitionEnd"></vun-overlay>
	</view>
</template>

<script>
	import VunOverlay from '@/components/vun-overlay'
	export default {
		components: { VunOverlay },
		data() {
			return {
				show: false,
			}
		},
		methods: {
			onClickShow () {
				this.show = true
			},
			transitionEnd () {
				this.show = false
			}
		}
	}
</script>
```



### 可配置参数

| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| show | `Boolean` |`Y`|`false` | 开启打开popup  |
| left | `Number` | `N`|`0` | 向左移动距离|
| top | `Number` |`N`| `0` | 向上移动距离  |
| opacity | `Number` |`N`| `0.6` | 蒙层opacity度数0-1 |
| has-animation | `String` |`N`| `true` | 是否开启蒙层出现动画 |
| can-auto-close | `Boolean` |`N`| `true` | 是否可以点击自动关闭 |
| timing-function | `Array` |`N`| `['ease-in','ease-out']` | 蒙层显示和隐藏动画函数 |
| duration | `Number` |`N`| `300` | 蒙层动画时间 |

### 事件回调

```
//消失后执行回调
 `@transitionEnd="transitionEnd"`;
 //点击立即执行回调
 `@close="close"`;
```

### 调用关闭

```
在vun-popup上面绑定ref，然后调用this.$refs.vunPopup.hide();即可关闭，常用于侧滑筛选面板
```
