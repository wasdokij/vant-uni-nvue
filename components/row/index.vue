<template>
	<view class="custom-class van-row" :style="style"><slot /></view>
</template>

<script>
export default {
	props: {
		gutter: Number
	},
	data() {
		return {
			style: ''
		};
	},
	watch: {
		gutter: 'setGutter'
	},
	mounted() {
		if (this.gutter) {
			this.setGutter();
		}
	},
	methods: {
		setGutter() {
			const gutter = this.gutter;
			const margin = '-' + Number(gutter) / 2 + 'px';
			this.style = gutter ? 'margin-right: ' + margin + '; margin-left: ' + margin + ';' : '';
			setTimeout(() => {
				this.$children.forEach((col) =>  {
					col.setGutter(this.gutter)
				});
			}, 1)
		}
	}
};
</script>

<style scoped>
@import url('index.css');
</style>
