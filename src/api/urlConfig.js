
const serverRoot = `${process.env.NODE_ENV === 'production' ? 'http://www.lybenson.com' : 'http://127.0.0.1'}:9050`

// 轮播图
export const banner = serverRoot + '/banner'

// 三日排行(轮播图右侧)
export const ranking3 = serverRoot + '/ranking3'

// 昨日排行(轮播图右侧)
export const rankingYesterday = serverRoot + '/ranking'

// 一周排行(轮播图右侧)
export const ranking7 = serverRoot + '/ranking7'

// 推广
export const promote = serverRoot + '/promote'

// 直播
export const live = serverRoot + '/live'

// 具体内容
export const contet = serverRoot + '/ding'

// 三日排行
export const contentrank = serverRoot + '/contentrank'

// 一周排行
export const contentrankweek = serverRoot + '/contentrankweek'

// 主站头部背景图
export const topbg = serverRoot + '/topbg'

// 默认搜索词
export const getSearchDefaultWords = serverRoot + '/getSearchDefaultWords'
