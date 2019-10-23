# vun-swipe-cell

!> 这个富交互体验组件依赖于 [BindingX](https://alibaba.github.io/bindingx/) 特性，使用前请确定你的App [是否安装](https://github.com/alibaba/bindingx#installation)

### 规则
- 一次只可滑动一行列表
- 点击右边按钮或点击列表可隐藏操作。

<img src="/unpackage/gif/swipecell.gif?raw=true" width="240"/>

## 使用方法
```vue
<template>
<view>
    <vun-swipe-cell @onClose='onClose' :swipeArr="swipeArr"  right-width="100" >
    	<vun-cell-group slot-scope="val">
    		<vun-cell  :title="val.val.item.title" :border="false" :value="val.val.index" />
    	</vun-cell-group>
    </vun-swipe-cell>
</view>
</template>

<script>
import VunSwipeCell from '@/components/vun-swipe-cell'
import VunCellGroup from '@/components/vun-cell-group'
import VunCell from '@/components/vun-cell'
export default {
	components: {
		VunCell,
		VunCellGroup,
		VunSwipeCell
	},
  data() {
    return {
      swipeArr: [
        {
          title: "标题1",
					width: 200,
          right: [
            {
              text: "置顶",
              onPress: function() {
                modal.toast({
                  message: "置顶",
                  duration: 0.3
                });
              }
            },
            {
              text: "删除",
              onPress: () => {
                modal.toast({
                  message: "删除",
                  duration: 0.3
                });
              },
              style: { backgroundColor: "#F4333C", color: "white" }
            }
          ]
        },
        {
          title: "标题2",
          right: [
            {
              text: "删除",
              onPress: () => {
                modal.toast({
                  message: "删除",
                  duration: 0.3
                });
              },
              style: { backgroundColor: "#F4333C", color: "white" }
            }
          ]
        },
        {
          title: "标题3",
          right: [
            {
              text: "删除",
              onPress: () => {
                modal.toast({
                  message: "删除",
                  duration: 0.3
                });
              },
              style: { backgroundColor: "#F4333C", color: "white" }
            }
          ]
        }
      ]
    };
  },
  
  methods: {
    onClose (e) {
    	const { instance, index, name } = e
    	if (name === '删除') {
    		uni.showModal({
    		    title: '提示',
    		    content: '确认删除？',
    		    success: res => {
    					if (res.confirm) {
    						instance.close()
    						setTimeout(() => {
    							this.$delete(this.data, index)
    						}, 500)
    					}
    		    }
    		})
    		return
    	}
    	uni.showToast({
    	    title: name
    	});
    }
  }
};
</script>
```

### 可配置参数
|参数|类型|是否要引入|默认值|描述|
|-------------|------------|--------|-----|-----|
|swipeArr|Array|Y|[]|列表数据|
|height|Number|Y|[]|列表高度|
|styles|Object|Y|[]| cell外框样式|

### Data API
|属性|说明|类型|默认值|
|-------------|------------|--------|-----|
|title|标题|String|null|
|width|右侧按钮组宽度|Number|100|
|right|右侧按钮组|Array|null|
|autoClose|点击按钮后自动隐藏按钮|Boolean|false|

### Button
|参数|类型|描述|
|-------------|------------|--------|
|text|String|文案|
|style|Object|按钮样式|

### 事件回调

```
// 单击列表
`@onClose='onClose'`
```
