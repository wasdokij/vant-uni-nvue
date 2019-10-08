import {
	isObj
} from '../common/utils';
const getClassNames = (name) => ({
	enter: `van-${name}-enter van-${name}-enter-active enter-class enter-active-class`,
	'enter-to': `van-${name}-enter-to van-${name}-enter-active enter-to-class enter-active-class`,
	leave: `van-${name}-leave van-${name}-leave-active leave-class leave-active-class`,
	'leave-to': `van-${name}-leave-to van-${name}-leave-active leave-to-class leave-active-class`
});
const nextTick = () => new Promise(resolve => setTimeout(resolve, 1000 / 30));
export const transition = function(showDefaultValue) {
	return {
		props: {
			customStyle: String,
			transitionShow: showDefaultValue,
			show: {
				type: Boolean,
				default: showDefaultValue
			},
			duration: {
				type: [Number, Object],
				default: 300
			},
			name: {
				type: String,
				default: 'fade'
			}
		},
		data() {
			return {
				type: '',
				inited: false,
				display: false,
				classNames: '',
				classes: '',
				currentDuration: ''
			};
		},
		mounted() {
			if (this.show) {
				this.enter()
			}
		},
		watch: {
			show: 'observeShow',
			duration: 'observeDuration'
		},
		methods: {
			observeShow (value) {
				if (value) {
					this.enter();
				} else {
					this.leave();
				}
			},
			enter() {
				const classNames = getClassNames(this.name);
				const currentDuration = isObj(this.duration) ? this.duration.enter : this.duration;
				this.status = 'enter';
				Promise.resolve()
					.then(nextTick)
					.then(() => {
						this.checkStatus('enter');
						this.inited = true
						this.classes = classNames.enter
						this.currentDuration = currentDuration
					})
					.then(nextTick)
					.then(() => {
						this.checkStatus('enter');
						this.classes = this.classNames['enter-to']
					})
					.catch(() => {});
			},
			leave() {
				const classNames = getClassNames(this.name);
				const currentDuration = isObj(this.duration) ? this.duration.leave : this.duration;
				this.status = 'leave';
				Promise.resolve()
					.then(nextTick)
					.then(() => {
						this.checkStatus('leave');
						this.classes = classNames.leave
						this.currentDuration = currentDuration
						console.log(currentDuration)
					})
					
					.then(() => setTimeout(() => {
						this.onTransitionEnd()
						this.$emit('transitionend', false);
					}, currentDuration))
					.then(nextTick)
					.then(() => {
						this.checkStatus('leave');
						this.classes = this.classNames['leave-to']
					})
					.catch(() => {});
			},
			checkStatus(status) {
				if (status !== this.status) {
					throw new Error(`incongruent status: ${status}`);
				}
			},
			onTransitionEnd() {
				this.leave()
				this.transitionShow = false
			}
		}
	};
};
