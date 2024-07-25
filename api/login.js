import request from "../utils/request";

// 微信获取手机号码
export const StartWechatLogin = (data)=>{
	return request({
		url:'/accredit',
		method:'get',
		data
	})
}

// 账号登陆
export const StartUserLogin = (data)=>{
	return request({
		url:'/user/login',
		method:'post',
		data
	})
}

// 账号注册
export const StartCreateUser = (data)=>{
	return request({
		url:'/user/create',
		method:'post',
		data
	})
}

