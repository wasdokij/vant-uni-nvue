# vun-icon

>  常用 iconfont 的封装，根据个人的需求添加iconfont

## 使用方法

```vue
<template>
	<view class="page">
		<!-- start 基础用法 -->
		<view class="demo-block">
			<text class="demo-block__title">基础用法</text>
			<view class="demo-block-item">
				<vun-icon name="arrow" />
				<vun-icon :name="'\ue63f'" />
				<vun-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
			</view>
		</view>
		<!-- end 基础用法 -->
	</view>
</template>

<script>
	import VunIcon from '@/components/vun-icon'
	export default {
		components: {
			VunIcon,
		}
	}
</script>

```


### 可配置参数
| Prop | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:| :----------:|
| **`name`** | `string` | `Y` | `-` | icon 的名称/unicode (注1)|
| **`size`** | `String` | `N` | `24` | icon 的尺寸|
| **`color`** | `String` | `N` | `#fff` | icon 的颜色|
| **`custom-style`** | `Object` | `N` | `{}` | 样式覆盖 (注2)|

- 注1：1.请修改自己的 icon地址 'src': "url('https://at.alicdn.com/t/font_1445508_m13wbfzrt6i.ttf')"  2. 注意 Font Family 名字是否一致
- 注2：仅图片支持 `custom-style` 覆盖，例如：
    ```
     :custom-style="{width: '90upx', height: '90upx'}"
    ```
### 事件回调

```
// `@click="click"`
```
