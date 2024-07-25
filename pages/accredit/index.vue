<template>
	<view class="accredit tuchuang_container">
		<view class="accredit_main">
			<view class="accredit_greet">
				<text>{{accreditTitle}}，</text>
				<text>欢迎您！</text>
			</view>
			<!-- account user -->
			<view class="accredit_form" v-if="accreditWay === 0">
				<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">微信一键登陆</button>
			</view>

			<!-- weichat -->
			<view class="accredit_form" v-if="accreditWay === 1">
				<view class="accredit_form-list">
					<input v-model="formData.phone" type="text" placeholder="请输入手机号码" />
				</view>
				<view class="accredit_form-list">
					<input v-model="formData.password" type="password" placeholder="请输入密码" />
				</view>
				<button @click="handelOnSubmit">登 陆</button>
			</view>

			<!-- create user -->
			<view class="accredit_form" v-if="accreditWay === 2">
				<view class="accredit_form-list">
					<input v-model="formData.name" type="text" placeholder="请输入用户名" />
				</view>
				<view class="accredit_form-list">
					<input v-model="formData.phone" type="text" placeholder="请输入手机号码" />
				</view>
				<view class="accredit_form-list">
					<input v-model="formData.password" type="password" placeholder="请输入密码" />
				</view>
				<button @click="handelOnSubmit">注 册</button>
			</view>

			<view class="accredit_terminal">
				<view v-if="accreditWay !== 0" @click="handelToggleTerminal(0)" class="accredit_terminal-list">
					<image src="../../static/icon/wechat.png" mode="heightFix"></image>
					<text>微信登陆</text>
				</view>
				<view v-if="accreditWay !== 1" @click="handelToggleTerminal(1)" class="accredit_terminal-list">
					<image src="../../static/icon/phone.png" mode="heightFix"></image>
					<text>账号登陆</text>
				</view>
				<view v-if="accreditWay !== 2" @click="handelToggleTerminal(2)" class="accredit_terminal-list">
					<image src="../../static/icon/user.png" mode="heightFix"></image>
					<text>注册用户</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import ErrMessage from '@/utils/errinform.js'
	import {
		StartWechatLogin,
		StartUserLogin,
		StartCreateUser
	} from '@/api/login.js'
	const accreditWay = ref(1) //  0 微信 1 账号 2 注册
	const accreditTitle = ref('汉卫教育科技')
	const formData = ref({
		name: '张三',
		phone: '18112883570',
		password: '123456'
	})
	// 选择登陆方式
	const handelToggleTerminal = (val) => {
		accreditWay.value = val
	}
	// 获取用户code用于手机号获取
	const getPhoneNumber = (e) => {
		if (e.detail.errno) {
			ErrMessage('error', '登陆失败，请稍后再试，或切换登陆方式！')
		} else {
			const code = e.detail.code
			StartWechatLogin({
				code
			}).then(res => {
				console.log('res', res)
			})
		}
	}
	//  执行注册或者登录
	const handelOnSubmit = () => {
		if (accreditWay.value === 1) {
			// 登录
			StartUserLogin(formData.value).then(res => {
				console.log('01-res', res)
			}).catch((error) => {
				console.log('01-err', error)
			})
		} else {
			// 注册
			StartCreateUser(formData.value).then(res => {
				console.log('02-res', res)
			}).catch((error) => {
				console.log('02-err', error)
			})
		}
	}
</script>

<style lang="scss">
	.accredit {
		position: relative;
		background: linear-gradient(70deg, #2041ea, #779efa);

		.accredit_main {
			top: 50%;
			left: 50%;
			width: 70%;
			height: 60%;
			display: flex;
			position: absolute;
			flex-direction: column;
			justify-content: space-evenly;
			transform: translate(-50%, -50%);

			.accredit_greet {
				display: flex;
				flex-direction: column;
				font-size: $uni-font-size-promax;
				color: $uni-text-color-inverse;
			}

			.accredit_form {

				.accredit_form-list {
					display: flex;
					align-items: center;
					height: $uni-event-height-max;
					margin-bottom: $uni-spacing-col-max;
					border-bottom: 1px solid $uni-text-color-inverse;

					uni-input,
					input {
						width: 100%;
						height: 100%;
						color: $uni-text-color-inverse;

						.input-placeholder {
							color: $uni-text-color-inverse;
						}
					}
				}
			}

			.accredit_terminal {
				display: flex;
				font-size: $uni-font-size-sm;
				justify-content: space-around;
				color: $uni-text-color-inverse;

				.accredit_terminal-list {
					display: flex;
					flex-direction: column;
					align-items: center;

					image {
						height: $uni-img-size-base;
					}
				}
			}
		}
	}
</style>