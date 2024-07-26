<template>
	<view class="tuchuang_container">
		<view class="ruler-main">
			<view class="ruler-event">
				<view v-for="i in 152" />
			</view>
			<view class="ruler-but">
				<view v-for="i in 12">{{i}}</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		onMounted
	} from 'vue';
	const app = getApp().globalData
	const {
		pixel,
		width,
		height
	} = app
	const ppi = 460
	const screenWidthPx = width * pixel
	const screenHeightPx = height * pixel
	const entityWidth = Math.trunc(Math.round((screenWidthPx / ppi)) * 25.4)
	const entityHeight = Math.trunc(Math.round((screenHeightPx / ppi)) * 25.4)
	console.log(entityWidth, 'screenWidthPx-screenHeightPx',
		entityHeight)
</script>

<style lang="scss" scoped>
	.ruler-main {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		background: #f0f;

		.ruler-event {
			width: 10mm;
			height: 100%;

			view{
				width: 10px;
				height: 5.1px;
				border-top: 1px solid #fff;
				background: #ccc;
			}
			view:nth-child(10n){
				width: 20px;
			}
		}

		.ruler-but{
			width: calc(100% - 10mm);
			display: flex;
			view {
				width: 10mm;
				height: 10mm;
				border-right: 1px solid #fff;
				background: #333;
			}
		} 
	}
</style>