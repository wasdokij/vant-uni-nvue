# vun-countdown

 > 倒计时组件
 
### 规则
CountDown 倒计时


<img src="/unpackage/gif/countdown.gif?raw=true" width="240"/>


## 使用方法

```vue
<template>
	<vun-countdown :time="time" />
</template>

<script>
	import VunCountdown from '@/components/vun-countdown'
	export default {
		components: { VunCountdown },
		data() {
			return {
				time: 30 * 60 * 60 * 1000,
			}
		}
	}
</script>
```


### 可配置参数 Prop

| 参数 | 类型 | 要求 | 默认值 | 说明 |
|-------------|------------|--------|-----|-----|
| time | `Number` |`Y`|`-` | 倒计时时长，单位毫秒  |
| format | `String` | `N`|`HH:mm:ss` | 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒|
| auto-start | `Boolean` |`N`| `true` | 是否自动开始倒计时  |
| millisecond | `Boolean` |`N`| `false` | 是否开启毫秒级渲染 |
| use-slot | `Boolean` |`N`| `false` | 是否使用自定义样式插槽 |


### 事件回调 Events

| 事件名 | 说明 | 回调参数 | 
|-------------|------------|--------|
| finish | 倒计时结束时触发 |`-`|
| change | 时间变化时触发，仅在开启use-slot后才会触发 | `timeData`|

### timeData 格式

> 通过事件回调 change 可以获取到timeData返回 参考 Demo里的自定义样式

| 名称 | 类型 | 说明 | 
|-------------|------------|--------|
| days | `Number` |  剩余天数 |
| hours | `Number` |  	剩余小时 |
| minutes | `Number` |  剩余分钟	 |
| seconds | `Number` |  剩余秒数 |
| milliseconds | `Number` |  剩余毫秒 |

### 方法
> 通过绑定 ref 可以获取到组件的实例并调用实例方法

| 方法名 | 参数 | 返回值 |  介绍 | 
|-------------|------------|--------|----------| 
| start | `-` |  `-` |  开始倒计时 | 
| pause | `-` |  	`-` |  暂停倒计时 | 
| reset | `-` |  `-`	 | 重设倒计时，若auto-start为true，重设后会自动开始倒计时 | 
