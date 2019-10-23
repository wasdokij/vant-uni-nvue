# vun-nav-bar 

> NavBar 导航栏

### 规则
- 自适应刘海屏
- 隐藏左边返回按钮，直接传入`left-button=""`即可

<img src="/unpackage/gif/navbar.jpg?raw=true" width="240"/>

## 使用方法

```vue
<template>
  <view>
		<vun-nav-bar left-text="返回" right-text="更多"/>
	</view>
</template>

<script>
  import VunNavBar from '@/components/vun-nav-bar'
  export default {
    components: { VunNavBar },
    methods: {
    }
  };
</script>
```


### 可配置参数

| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| title | `String` |`Y`| `-` | 标题 |
| right-button | `String` |`N`| `-` | 右侧button icon |
| right-text | `String` |`N`| `-` | 右侧button文案，优先显示|
| left-button | `String` |`N`| `返回图标` |  左侧 button icon|
| left-text | `String` |`N`| `` |  左侧文案，优先显示|
| text-color | `String` |`N`| `#3D3D3D` | 标题颜色 |
| background-color | `String` |`N`| `#ffffff` | 背景颜色 |
| use-default-return | `Boolean` |`N`| `true` | 是否使用默认的返回 |
| fixed | `Boolean` | `N` |`false`| 是否固定在顶部 |
| show | `Boolean` | `N` |`true`| 是否显示 |
| border | `Boolean` | `N` |`true`| 是否显示下边框 |
| bar-style | `Object` | `N`|`{}` | 覆盖修改原有的样式 |

### Slot
当以上配置都不满足时候，你可以使用 slot 来自定义设置你的组件。 

1. `<slot name="left"></slot>`：左边返回
2. `<slot name="middle"></slot>`：中间标题
3. `<slot name="right"></slot>`：右边

例子:
```
<vun-nav-bar left-text="返回" >
	<vun-icon :name="'\ue60d'"  slot="right"/>
</vun-nav-bar>
```

### 事件回调

```
// @clickLeft="clickLeft"
// @clickRight="clickRight"
```

