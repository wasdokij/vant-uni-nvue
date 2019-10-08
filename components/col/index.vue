<template>
	<view class="custom-class" ref="col" :class="[setClass, setClass2]" :style="style"><slot /></view>
</template>

<script>
import utils from '../wxs/utils.js';
export default {
	 props: {
        span: Number,
        offset: Number,
		gutterss: [String, Number]
    },
	data() {
		return {
			 style: '',
			 setClass: '',
			 setClass2: ''
		};
	},
	created() {
		this.setClass = utils.bem('col', [this.span])
		this.setClass2 = this.offset ? 'van-col--offset-' +  this.offset : ''
	},
	methods: {
		setGutter (gutter) {
           const padding = gutter + "rpx";
           const style = gutter ? "padding-left: " + padding + "; padding-right: " + padding + ";" : '';
            if (style !== this.style) {
				this.style = style
            }
        }
	}
};
</script>

<style scoped>
@import url('index.css');
</style>
