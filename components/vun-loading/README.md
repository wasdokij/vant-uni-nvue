# vun-loading 

 > 加载提示组件
 
### 规则
- 局部 Loading 不建议设置太大

## [Demo](https://h5.m.taobao.com/trip/wxc-loading/index.html?_wx_tpl=https%3A%2F%2Fh5.m.taobao.com%2Ftrip%2Fwxc-loading%2Fdemo%2Findex.native-min.js)
<img src="https://img.alicdn.com/tfs/TB11cTsfBfH8KJjy1XbXXbLdXXa-376-668.gif" width="240"/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.alicdn.com/tfs/TB195ehSpXXXXc4XpXXXXXXXXXX-200-200.png" width="160"/>

## 使用方法

```vue
<template>
    <div>
        <vun-loading :show="isShow" type="trip" />
        <vun-loading-page :show="isShow" type="trip" />
    </div>
</template>
<script>
    import VunLoading from '@/components/vun-loading'
    import VunLoadingPage from '@/components/vun-loading/page.nvue'
    export default {
        components: { VunLoading, VunLoadingPage },
        data () {
            return {
                isShow: true
            };
        }
    };
</script>
```

更详细代码可以参考 [demo]()

### 可配置参数

#### 页面Loading

| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| show | `Boolean` |`Y`| `false` | 是否显示|
| loading-text | `String` |`N`| `-` | 配置文案的显示 |
| **interval** | `Number` |`N`| `0` | 延迟毫秒数显示，用于体验优化|
| type | `String` | `N`|`default` |图案类别`default`/`trip`|
| need-mask | `Boolean` | `N`|`false` | 加载时候是都需要一个蒙层防止用于误点 |
| mask-style | `Object` | `N`|`{}` | 蒙层样式覆盖 |


### Event

```
@onLoadingMask="maskClicked"
```

#### 局部Loading

| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| show | `Boolean` |`Y`| `false` | 是否显示|
| size | `Number` |`N`| `60` | 局部加载的宽高 |
| url | `String` |`N`| `-` | 局部加载gif图 |