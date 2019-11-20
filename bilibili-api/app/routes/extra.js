import Router from 'koa-router'
import axios from 'axios'
import { getSearchDefaultWords, topbg, hot, slideshow, season, recommend, videoShot } from './urlConfig'

const router = Router()

// 默认搜索词
router.get('/getSearchDefaultWords', async (ctx, next) => {
  let response = await axios.get(getSearchDefaultWords)
  ctx.body = response.data
})

// 顶部背景图
router.get('/topbg', async (ctx, next) => {
  let response = await axios.get(topbg)
  ctx.body = response.data
})

// 各分类热门
router.get('/hot', async (ctx, next) => {
  let response = await axios.get(hot)
  ctx.body = response.data
})

// 番剧下方更新列表右侧新番放送表上侧
router.get('/slideshow', async (ctx, next) => {
  let response = await axios.get(slideshow)
  ctx.body = response.data
})

// 番剧下方更新列表右侧新番放送表下侧
router.get('/season', async (ctx, next) => {
  let response = await axios.get(season)
  ctx.body = response.data
})

// 最底部特别推荐
router.get('/recommend', async (ctx, next) => {
  let response = await axios.get(recommend)
  ctx.body = response.data
})

// 缩略图
router.post('/videoShot', async (ctx, next) => {
  const body = ctx.request.body;
  let index = 1;
  let aid = body.aid;
  let url = `${videoShot}?index=${index}&aid=${aid}`;
  console.log(url)
  let response = await axios.get(url)
  ctx.body = response.data
})

export default router