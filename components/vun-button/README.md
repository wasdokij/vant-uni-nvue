# vun-button

> vun 按钮组件，支持 5 种基本类型 button，可自定义样式

<img src="/unpackage/gif/buttom.gif" width="240"/>

## 使用方法

```vue
<template>
  <vun-button type="default" text="默认按钮" />
</template>

<script>
  import VunButton from '@/components/vun-button'
  export default {
    components: { VunButton }
  }
</script>

```

### 可配置参数
| Prop | Type | Required | Default | Description |
| ---- |:----:|:---:|:-------:| :----------:|
| **`text`** | `String` | `Y` | `-` | 展现的文字 |
| **`type`** | `String` | `N` | `default` | 类型：支持default、primary、info、warning、danger五种类型 |
| **`size`** | `String` | `N` | `normal` | 尺寸：支持large、normal、small、mini四种尺寸 |
| **`plain`** | `Boolean` | `N` | `false` | 是否为朴素按钮	 |
| **`square`** | `Boolean` | `N` | `false` | 是否为方形按钮 |
| **`round`** | `Boolean` | `N` | `false` | 是否为圆形按钮 |
| **`hairline`** | `Boolean` | `N` | `false` | 是否为细边框按钮（0.5upx 边框） |
| **`disabled`** | `Boolean` | `N` | `false` | 是否 disabled（注1） |
| **`btn-style`** | `Object` | `N` | `{}` | 按钮的样式对象（注2） |
| **`icon`** | `String` | `N` | `` | 左侧图标名称或图片链接 |
| **`icon-color`** | `String` | `N` | `#fff` | 左侧图标颜色 |
| **`icon-style`** | `Object` | `N` | `{}` | 左侧图片Style（注3） |
| **`loading`** | `Boolean` | `N` | `false` | 是否显示为加载状态 |
| **`loading-size`** | `String` | `N` | `60` | 加载状态大小 |
| **`loading-url`** | `String` | `N` | `` | 加载状态gif动画 |
| **`loading-text`** | `String` | `N` | `` | 加载状态提示文字 |



- 注1：disabled 样式会覆盖掉默认样式

- 注2：按钮自定义样式 `btn-style` 例如：
    ```
     :btn-style="{width: '90upx', height: '90upx'}"
    ```
- 注3：仅图片支持 `icon-style` 自定义样式，例如：
		```
		 :icon-style="{width: '90upx', height: '90upx'}"
		```
### 事件回调

```
// `@click="ButtonClicked"`
当按钮为login, disabled 这两种状态时将不会触发@click事件， @tap会触发
```
