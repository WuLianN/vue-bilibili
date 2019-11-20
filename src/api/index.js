import * as url from './urlConfig'
import axios from 'axios'

//获取轮播图
export const bannerApi = {
	list() {
		return axios.get(url.banner).then((response) => {
			return response.data
		})
	}
}

export const rankApi = {
	// 三日排行
	ranking3() {
		return axios.get(url.ranking3).then((response) => {
			return response.data
		})
	},

	// 昨日排行
	rankingYesterday() {
		return axios.get(url.rankingYesterday).then(response => {
			return response.data;
		})
	},

	// 一周排行
	ranking7() {
		return axios.get(url.ranking7).then(response => {
			return response.data;
		})
	}
}

// 推广
export const promoteApi = {
	promote() {
		return axios.get(url.promote).then((response) => {
			return response.data
		})
	}
}

// 直播
export const liveApi = {
	live() {
		return axios.get(url.live).then((response) => {
			return response.data
		})
	}
}

// 具体内容
export const contentApi = {
	content() {
		return axios.get(url.contet).then((response) => {
			return response.data
		})
	}
}

// 具体内容的三日排行榜信息
export const contentrankApi = {
	contentrank(param) {
		return axios.post(url.contentrank, param).then((response) => {
			return response.data
		})
	},
	contentrankweek(param) {
		return axios.post(url.contentrankweek, param).then((response) => {
			return response.data
		})
	}
}

// 主站头部背景图
export const topbgApi = {
	getTopBg() {
		return axios.get(url.topbg).then(response => {
			return response.data;
		})
	}
}

// 默认搜索词
export const getSearchDefaultWords = () => {
	return axios.get(url.getSearchDefaultWords).then(response => {
		return response.data;
	})
}

// 视频播放链接
export const link = 'https://www.bilibili.com/video/av'

// videoShot
export const videoShot = (params) => {
	return axios.post(url.videoShot, params).then(response => {
		return response.data;
	})
}