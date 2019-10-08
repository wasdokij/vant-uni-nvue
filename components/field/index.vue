<template>
	<block>
		<van-cell :icon="leftIcon" :title="label" :center="center" :border="border" :is-link="isLink" :required="required"
		 :custom-style="customStyle" :title-width="titleWidth" custom-class="van-field" :size="size">
			<slot name="left-icon" slot="icon" />
			<slot name="label" slot="title" />
			<slot name="right-icon" slot="right-icon" />
			<view class="van-field__body" :class="[type === 'textarea' ? 'van-field__body--textarea' : '']">
				<textarea v-if="type === 'textarea'" class="input-class" :class="[
                        utils.bem('field__input', [
                            inputAlign,
                            { disabled, error }
                        ])
                    ]"
				 :fixed="fixed" :focus="focus" :value="value" :disabled="disabled || readonly" :maxlength="maxlength" :auto-height="autosize"
				 :placeholder="placeholder" :placeholder-style="placeholderStyle" :placeholder-class="
                        error
                            ? 'van-field__input--error'
                            : 'van-field__placeholder'
                    "
				 :cursor-spacing="cursorSpacing" :adjust-position="adjustPosition" :show-confirm-bar="showConfirmBar" @input="onInput"
				 @blur="onBlur" @focus="onFocus" @confirm="onConfirm" />
				<input
                    v-else
                    class="input-class"
                    :class="[
                        utils.bem('field__input', [
                            inputAlign,
                            { disabled, error }
                        ])
                    ]"
                    :type="type"
                    :focus="focus"
                    :value="value"
                    :disabled="disabled || readonly"
                    :maxlength="maxlength"
                    :placeholder="placeholder"
                    :placeholder-style="placeholderStyle"
                    :placeholder-class="
                        error
                            ? 'van-field__input--error'
                            : 'van-field__placeholder'
                    "
                    :confirm-type="confirmType"
                    :confirm-hold="confirmHold"
                    :cursor-spacing="cursorSpacing"
                    :adjust-position="adjustPosition"
                    @input="onInput"
                    @blur="onBlur"
                    @focus="onFocus"
                    @confirm="onConfirm"
                />
                <van-icon
                    v-if="showClear"
                    size="32rpx"
                    name="clear"
                    class="van-field__clear-root"
                    custom-class="van-field__clear"
                    @touchstart="onClear"
                />
                <view
                    class="van-field__icon-container"
                    v-if="icon || useIconSlot"
                    @tap="onClickIcon"
                >
                    <van-icon
                        v-if="icon"
                        size="32rpx"
                        :name="icon"
                        custom-class="van-field__icon"
                    />
                    <slot v-else name="icon" />
                </view>
                <view v-if="useButtonSlot" class="van-field__button">
                    <slot name="button" />
                </view>
            </view>
            <view
                v-if="errorMessage"
                class="van-field__error-message"
                :class="[
                    utils.bem('field__error', [
                        errorMessageAlign,
                        { disabled, error }
                    ])
                ]"
                >{{ errorMessage }}</view
            >
        </van-cell>
    </block>
</template>
<script>
import VanCell from "../cell/index.vue";
import VanIcon from "../icon/index.vue";
import utils from "../wxs/utils.js";
export default {
    components: {
        VanCell,
        VanIcon
    },
    props: {
        size: String,
        icon: String,
        label: String,
        error: Boolean,
        fixed: Boolean,
        focus: Boolean,
        center: Boolean,
        isLink: Boolean,
        leftIcon: String,
        disabled: Boolean,
        autosize: Boolean,
        readonly: Boolean,
        required: Boolean,
        iconClass: String,
        clearable: Boolean,
        inputAlign: String,
        errorMessageAlign: String,
        confirmType: String,
        confirmHold: Boolean,
        errorMessage: String,
        placeholder: String,
        customStyle: String,
        useIconSlot: Boolean,
        useButtonSlot: Boolean,
        showConfirmBar: {
            type: Boolean,
            default: true
        },
        value: String,
        placeholderStyle: String,
        adjustPosition: {
            type: Boolean,
            default: true
        },
        cursorSpacing: {
            type: Number,
            default: 50
        },
        maxlength: {
            type: Number,
            default: -1
        },
        type: {
            type: String,
            default: "text"
        },
        border: {
            type: Boolean,
            default: true
        },
        titleWidth: {
            type: String,
            default: "180rpx"
        }
    },
    data() {
        return {
            utils: utils,
            showClear: false
        };
    },
    beforeCreate() {
        this.focused = false;
    },
    created() {},
    methods: {
        onInput(event) {
            const _a = (event.detail || {}).value;
            const value = _a === void 0 ? "" : _a;
            // this.value = value;
            this.showClear = this.getShowClear(value);
            this.emitChange(value);
        },
        onFocus(event) {
            const _a = event.detail || {};
            const _b = _a.value;
            const value = _b === void 0 ? "" : _b;
            const _c = _a.height;
            const height = _c === void 0 ? 0 : _c;
            this.$emit("focus", { value: value, height: height });
            this.focused = true;
            this.blurFromClear = false;
            this.showClear = this.getShowClear();
        },
        onBlur(event) {
            const _a = event.detail || {};
            const _b = _a.value;
            const value = _b === void 0 ? "" : _b;
            const _c = _a.cursor;
            const cursor = _c === void 0 ? 0 : _c;
            this.$emit("blur", { value: value, cursor: cursor });
            this.focused = false;
            const showClear = this.getShowClear();
            if (this.value === value) {
                this.showClear = showClear;
            } else if (!this.blurFromClear) {
                // fix: the handwritten keyboard does not trigger input change
                // this.value = value;
                this.showClear = showClear;
                this.emitChange(value);
            }
        },
        onClickIcon() {
            this.$emit("click-icon");
        },
        getShowClear(value) {
            value = value === undefined ? this.value : value;
            return this.clearable && this.focused && value && !this.readonly;
        },
        onClear() {
            this.blurFromClear = true;
            // this.value = "";
            this.showClear = this.getShowClear("");
            this.emitChange("");
            this.$emit("clear", "");
        },
        onConfirm() {
            this.$emit("confirm", this.value);
        },
        emitChange(value) {
            this.$emit("input", value);
            this.$emit("change", value);
        }
    }
};
</script>

<style scoped>
@import url("index.css");
</style>
