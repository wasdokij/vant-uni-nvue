<template>
	<view class="van-checkbox custom-class">
	  <view class="van-checkbox__icon-wrap" @tap="toggle">
		<slot v-if="useIconSlot" name="icon" />
		<van-icon
		  v-else
		  name="success"
		  :class="{{ utils.bem('checkbox__icon', [shape, { disabled, checked: value }]) }}"
		  style="{{ checkedColor && value && !disabled ? 'border-color:' + checkedColor + '; background-color:' + checkedColor : '' }}"
		  custom-class="icon-class"
		  custom-style="line-height: 40rpx;"
		/>
	  </view>
	  <view class="label-class {{ utils.bem('checkbox__label', [labelPosition, { disabled }]) }}" bindtap="onClickLabel">
		<slot />
	  </view>
	</view>
</template>
<script>
import utils from '../wxs/utils.js';
export default {
	name: 'checkbox',
	props: {
		value: null,
        disabled: Boolean,
        useIconSlot: Boolean,
        checkedColor: String,
        labelPosition: String,
        labelDisabled: Boolean,
        shape: {
            type: String,
            default: 'round'
        } 
	},
	data() {
		return {
			setClass: '',
			setStyle: ''
		};
	},
	created() {
		this.setClass = utils.bem('checkbox__icon', [this.shape, { disabled: this.disabled, checked: this.value }])
		this.setStyle = this.checkedColor && this.value && !this.disabled ? 'border-color:' + this.checkedColor + '; background-color:' + this.checkedColor : ''
	},
	methods: {
		// onSetStyle() {
		// 	this.setStyle = `z-index:${this.zIndex};-webkit-transition-duration:${this.currentDuration}ms;transition-duration:${this.currentDuration}ms;${this.display ? '' : 'display: none'};${this.customStyle}`
		// },
		onClickOverlay() {
			this.$emit('click-overlay');
			if (this.closeOnClickOverlay) {
				this.$emit('close');
			}
		},
		observeClass() {
			this.setClass = utils.bem('popup', [this.position, { safe: this.isIPhoneX && this.safeAreaInsetBottom }]);
			this.updateClasses(this.transition || this.position);
			if (this.transition === 'none') {
				this.duration = 0
			}
		}
	}
};
</script>
<style scoped>
@import url('index.css');
</style>
