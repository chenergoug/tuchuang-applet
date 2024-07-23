// bast_url
const bast_url = 'http://localhost:8088';
// 超时时长
const tomeout = 5000

// Request 封装
export default (config) => {
	const {
		user,
		method,
		data
	} = config
	return new Promise((resolve, reject) => {
		uni.request({
			url: bast_url + url,
			method,
			data,
			timeout,
			// 成功
			success(response) {
				const res = response.data
				if (res.code === 200) {
					resolve(res.data)
				} else {
					// 请求失败
				}
			},
			// 失败
			fail(err) {
				reject(err)
			},
			// 成功失败都执行
			complete() {

			}
		})
	})
}