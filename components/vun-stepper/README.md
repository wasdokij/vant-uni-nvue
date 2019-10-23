# vun-stepper 

>  步进器组件

### 规则
- 用作增加或者减少当前数值, 常用于商品数量的小幅度修改

<img src="/unpackage/gif/steooer.gif?raw=true" width="240"/>

## 使用方法

```vue
<template>
<vun-stepper ></vun-stepper>
</template>

<script>
  import VunStepper from '@/components/vun-stepper'
  export default {
    components: { VunStepper },
    data: () => ({
    }),
    methods: {
    }
  };
</script>
```


### 可配置参数

| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| value | `Number` |`N`| `1` | 初始值 |
| step | `Number` |`N`| `1` | 步长  |
| min | `Number` |`N`| `1` | 范围（最小值） |
| max | `Number` | `N`|`--` | 范围（最大值） |
| decimal-length | `Number` | `N`|`-` | 固定显示的小数位数 |
| disabled | `Boolean` |`N`| `false` | 是否禁用 |
| disable-input | `Boolean` |`N`| `false` | 是否禁用输入框 |
| input-width | `String` |`N`| `86` | 输入框宽度 |
| button-size | `String` |`N`| `56` | 按钮大小，输入框高度会和按钮大小保持一致 |


### 事件回调

```
@change="change" // 当绑定值变化时触发的事件 返回 event.value: 当前输入的值
@overlimit="overlimit" // 点击不可用的按钮时触发
@minus="minus" // 点击➖时触发
@plus="plus" // 点击➕时触发
@focus="focus" // 输入框聚焦时触发
@blur="blur" // 输入框失焦时触发
```
