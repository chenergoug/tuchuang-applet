<template>
	<view class="tuchuang_container">
		<view class="ruler-main">
			<view class="ruler-event">123</view>
			<view class="ruler-but">456</view>
		</view>
	</view>
</template>

<script setup>
	import { ref,onMounted } from 'vue';
	const app = getApp().globalData
	const {pixel , width , height } = app
	// 假设某个元素的高度为 300 像素
	    const elementPixelHeight = 300;
	    
	    // 计算屏幕高度（以英寸为单位）
	    const screenHeightInches = height / pixel;
	    console.log('screenHeightInches',screenHeightInches)
	    // 将屏幕高度从英寸转换为毫米
	    const screenHeightMM = screenHeightInches * 25.4;
	    console.log('screenHeightMM',screenHeightMM)
	    // 计算元素的实际高度（以毫米为单位）
	    const elementHeightMM = (elementPixelHeight / height) * screenHeightMM;
			
	    console.log('元素的实际高度为: ', elementHeightMM, ' 毫米');
</script>

<style lang="scss" scoped>
	.ruler-main{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		background: #f0f;
		
		.ruler-event{
			width: 30%;
			background: #ccc;
		}
	}
</style>