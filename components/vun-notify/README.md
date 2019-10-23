# vun-notify 

 >  消息提示
 
### 规则
常用于 当前页面通知

<img src="/unpackage/gif/notify.gif?raw=true" width="240"/>

## 使用方法

```vue
<template>
	<view class="page">
		<vun-button type="default" @click="onClickShow" text="消息提示" />
		
		<vun-notify ref="notify"></vun-notify>
	</view>
</template>

<script>
	import VunButton from '@/components/vun-button'
	import VunNotify from '@/components/vun-notify'
	export default {
		components: { VunButton, VunNotify },
		methods: {
			onClickShow () {
				this.$refs.notify.Notify({
					content: '这是弹出通知的'
				})
			}
		}
	}
</script>
```

更详细代码可以参考 [demo]()

### Notify API
|属性|说明|类型|默认值|
|-------------|------------|--------|-----|
|notifyColor|notify背景样式|String|rgba(45, 61, 82, 0.7)|
|notifyHeight|notify高度|Number|88|
|duration|展示时长(ms)，值为 0 时，notify 不会消失|Number|2000|
|content|展示文案|String|-|
|contentStyle|展示文案样式|Object|{fontSize: '32upx','color': '#e1e4e7'}|
|animation|notify动画方式|Object|{timingFunction: 'ease-out'} [配置文档](https://weex.apache.org/zh/docs/modules/animation.html#transition)|


### 事件回调

```
//消失后执行回调
 `@close="close"`
```

### 调用关闭

```
当duration为0时，可在vun-notify上面绑定ref，然后调用this.$refs.notify.hide();即可关闭
```
