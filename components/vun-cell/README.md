# vun-cell 

>  单元格组件，可用作展示列表信息、链接或者表单等  

### 规则
  - 一般由主要信息、操作动作组成，信息在左、操作在右
  - 可以对 `label, title, value` 进行 `slot` 覆盖
  
<img src="/unpackage/gif/cell.gif?raw=true" width="240"/>

## 使用方法

```vue
<template>
	<view class="page">
		<view class="demo-block">
			<text class="demo-block__title">基础用法</text>
			<view class="demo-block-item">
				<vun-cell-group>
					<vun-cell title="单元格" value="内容" />
					<vun-cell title="描述信息" value="内容" label="描述信息" />
				</vun-cell-group>
			</view>
		</view>
		<view class="demo-block">
			<text class="demo-block__title">单元格大小</text>
			<view class="demo-block-item">
				<vun-cell-group>
					<vun-cell title="单元格" value="内容" size="large" />
					<vun-cell title="描述信息" value="内容" size="large" label="描述信息" />
				</vun-cell-group>
			</view>
		</view>

		<view class="demo-block">
			<text class="demo-block__title">展示图标</text>
			<view class="demo-block-item">
				<vun-cell title="单元格" icon="filter"  value="内容" />
				<vun-cell title="单元格" icon="https://img.yzcdn.cn/vant/logo.png" />
			</view>
		</view>
		
		<view class="demo-block">
			<text class="demo-block__title">只设置 value</text>
			<view class="demo-block-item">
				<vun-cell value="内容" />
			</view>
		</view>
		
		<view class="demo-block">
			<text class="demo-block__title">展示箭头</text>
			<view class="demo-block-item">
				<vun-cell title="单元格" is-link />
				<vun-cell title="单元格" value="内容" is-link />
			</view>
		</view>
		

		<view class="demo-block">
			<text class="demo-block__title">分组标题</text>
			<view class="demo-block-item">
				<vun-cell-group title="分组1">
				  <vun-cell title="单元格" :border="false" value="内容" />
				</vun-cell-group>
				<vun-cell-group title="分组2">
				  <vun-cell title="单元格" :border="false" value="内容" />
				</vun-cell-group>
			</view>
		</view>
		
		<view class="demo-block">
			<text class="demo-block__title">使用插槽</text>
			<view class="demo-block-item">
				<vun-cell value="内容" is-link>
					<view slot="title" style="flex-direction: row;">
					    <text class="van-cell-text">单元格</text>
					    <text>标签</text>
					  </view>
				</vun-cell>
				
				<vun-cell title="单元格">
				  <vun-icon slot="right-icon" :name="'\ue60d'" class="custom-icon" />
				</vun-cell>
			</view>
		</view>
		
	</view>
</template>

<script>
  import VunCellGroup from '@/components/vun-cell-group'
  import VunCell from '@/components/vun-cell'
  import VunIcon from '@/components/vun-icon';
  export default {
  	components: {
  		VunCellGroup,
  		VunCell,
  		VunIcon
  	}
  };
</script>
```
更详细代码可以参考 [demo]()


### 可配置参数

| Prop      | Type   |Required  | Default   | Description  |
|-------------|------------|--------|--------|-----|
| title | `String` | `N`|  `-` | 标题 |
| label | `String` | `N`|  `-` | 标题下方的描述信息 |
| value  | `String` | `N`| `-` | 右侧内容 |
| url  | `String` | `N`| `-`| 跳转链接，无链接不跳转 |
| size | `String` | `N`|`-` |  单元格大小，可选值为 large |
| icon | `String` |`N`| `-` |  	左侧图标名称或图片链接，可选值见 Icon 组件 |
| is-link | `Boolean` | `N`| `false` |  	是否展示右侧箭头并开启点击反馈 |
| border | `Boolean` | `N`| `true` | 是否显示下边框 |
| title-width | `String` | `N`| `-` |  标题宽度，须包含单位 |
| link-type | `String` |`N`| `navigateTo` | 链接跳转类型，可选值为 redirectTo switchTab reLaunch等类型 |
| clickable | `Boolean` |`N`| `false` | 是否开启点击反馈 |
| use-label-slot | `Boolean` |`N`| `false` | 是否使用 label slot |
| custom-style | `Object` |`N`| `{}` | 根节点样式类覆盖 (注1) |
| icon-color | `String` |`N`| `#333` | 左侧图标颜色 |
| icon-style | `Object` |`N`| `{}` | 左侧图片样式类覆盖 (注1) |
| icon-size | `String` |`N`| `40` | 左侧图标大小 |


- 注1：仅图片支持 `custom-style` 覆盖，例如：
    ```
     :custom-style="{width: '90upx', height: '90upx'}"
    ```

### Slot
1. `<slot name="icon"></slot>`：icon卡槽，自定义左侧icon显示内容, 如果设置了icon属性则不生效
2. `<slot name="label"></slot>`：label卡槽，替换默认 label 占位, 需要设置 use-label-slot属性
3. `<slot name="title"></slot>`：title卡槽，替换默认 title 占位, 如果设置了title属性则不生效
4. `<slot name="value"></slot>`：value卡槽，如果设置了value属性则不生效
5. `<slot name="right-icon"></slot>`：right-icon卡槽，默认是arrow，如果设置了is-link属性则不生效


