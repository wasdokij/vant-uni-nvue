# vun-popover 

 > 在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。 同时设置了遮罩层，通过点击遮罩层的任一位置，进行退出。

### 规则
- 常用于拓展气泡按钮组
- 在指定坐标位置弹出气泡，点击遮罩层进行关闭
- 支持上、下、左、右四个方向
- 可自定义气泡和箭头具体位置

<img src="/unpackage/gif/popover.gif?raw=true" width="240"/>


## 使用方法

```vue
<template>
  <vun-popover ref="wxc-popover" :buttons="btns" :position="popoverPosition" :arrowPosition="popoverArrowPosition"
   @wxcPopoverButtonClicked="popoverButtonClicked" />
</template>

<script>
  import VunPopover from '@/components/vun-popover'
  const dom = weex.requireModule('dom')
  export default {
  	components: {
  		VunPopover
  	},
    data: () => ({
      btns: [{
      		icon: '',
      		text: 'Scan',
      		key: 'key-scan'
      	},
      	{
      		icon: '',
      		text: 'My Qrcode',
      		key: 'key-qrcode'
      	},
      	{
      		icon: '',
      		text: 'Help',
      		key: 'key-help'
      	},
      ],
      popoverPosition:{x:-14,y:0},
      popoverArrowPosition:{pos:'top',x:-15}
    }),
    methods: {
      minibarRightButtonClick () {
      	const result = dom.getComponentRect(this.$refs.box, option => { 
      		console.log('getComponentRect:', option) // 可通过获取dom 位置
      	})
      	this.$refs['wxc-popover'].wxcPopoverShow();
      }
    }
  };
</script>
```


### 可配置参数

| Prop | Type | Required | Default | Description |
|-------------|------------|--------|-----|-----|
| buttons | `Array` |`Y`|`[]` | 气泡按钮数据列表` |
| position | `Object` |`Y`|`{x:0,y:0}` | 气泡位置，x>0 为左边距，x<0 为右边距，y同理 |
| arrowPosition | `Object` |`Y`|`{pos:'top',x:0,y:0}` | 气泡箭头位置，pos 为'top,bottom,left,right'，配合x，y定位箭头位置  |
| coverColor | `String` |`N`|`rgba(0,0,0,0.4)`| 遮罩层颜色，如 `rgba(0,0,0,0.4)`，`rgb(0,0,0)`，`#000` |
| hasAnimation | `Boolean` |`N`| `true` | 是否开启展开动画  |
| textStyle | `Object` |`N`| `{}` | 文字样式覆盖 |

### 调用显示

```
在vun-popover上面绑定ref，然后调用this.$refs['vun-popover'].hide();即可显示
```

### 事件回调

```
// `@onItem` 返回一个对象，标志点击按钮的 `key` 和 `index`
```
