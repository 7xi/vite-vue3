'use strict'
import service from "../utils/axios";

// 首页-轮播图-#1
export const reqBanner = (params: object) => service.post('/api/banner', params)

// 新闻列表-#3
export const reqNews = (params: object) => service.post('/api/news', params)

// 产品列表-#3
export const reqProduct = (params: object) => service.post('/api/product', params)

// 获取关于我的信息
export const reqAbout = (params: object) => service.get('/api/about', params)
