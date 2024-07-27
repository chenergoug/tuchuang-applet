<script>
	const globalData = {}
	export default {
		onLaunch: () => {
			uni.getSystemInfo({
				success: (systemInfo) => {
					console.log('systemInfo',systemInfo)
					globalData.pixel = systemInfo.pixelRatio
					globalData.width = systemInfo.windowWidth 
					globalData.height = systemInfo.windowHeight 
				}
			})
			console.log('App Launch')
		},
		onShow: () => {
			console.log('App Show')
		},
		onHide: () => {
			console.log('App Hide')
		},
		globalData
	}
</script>

<style>
	/*每个页面公共css */
	/* @import url("static/index.css"); */
	/* @import url('static/iconfont.css'); */
	uni-page-body,
	page {
		width: 100%;
		height: 100%;
	}

	/* 布局容器 */
	.tuchuang_container {
		width: 100%;
		height: 100%;
	}

	/* 头部 */
	.tuchuang_container-header {
		padding: 10px;
	}

	/* 主体 */
	.tuchuang_container-main {
		padding: 10px;
	}

	/* 底部 */
	.tuchuang_container-footer {
		padding: 10px;
	}
</style>