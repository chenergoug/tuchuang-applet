<template>
	<view class="accredit tuchuang_container">
		<view class="accredit_main">
			<view class="accredit_greet">
				<text>{{accreditTitle}}，</text>
				<text>欢迎您！</text>
			</view>

			<view class="accredit_form">
				<view class="accredit_form-list">
					<input type="text" placeholder="请输入用户名" />
				</view>
				<view class="accredit_form-list">
					<input type="text" placeholder="请输入用户名" />
				</view>
				<button>登 陆</button>
			</view>

			<view class="accredit_terminal">
				<view @click="handelToggleTerminal(0)" class="accredit_terminal-list">
					<text>微信登陆</text>
				</view>
				<view @click="handelToggleTerminal(1)"  class="accredit_terminal-list">
					<text>账号登陆</text>
				</view>
				<view @click="handelToggleTerminal(2)"  class="accredit_terminal-list">
					<text>注册用户</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref } from 'vue'
	const accreditTitle = ref('土创信息科技')
	const handelToggleTerminal = (val)=>{
		console.log('....',val)
	}
</script>

<style lang="scss">
	.accredit {
		position: relative;
		background: linear-gradient(70deg, #2041ea, #779efa);

		.accredit_main {
			top: 50%;
			left: 50%;
			width: 65%;
			position: absolute;
			transform: translate(-50%, -50%);

			.accredit_greet {
				display: flex;
				flex-direction: column;
				font-size: $uni-font-size-max;
				color: $uni-text-color-inverse;
			}

			.accredit_form {
				margin-top: $uni-spacing-col-max;

				.accredit_form-list {
					display: flex;
					align-items: center;
					height: $uni-event-height-max;
					margin-bottom: $uni-spacing-col-max;
					border-bottom: 1px solid $uni-text-color-inverse;

					uni-input,input {
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
				justify-content: space-between;
				color: $uni-text-color-inverse;
				margin-top: $uni-spacing-col-max;

			}
		}
	}
</style>