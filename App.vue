<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
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