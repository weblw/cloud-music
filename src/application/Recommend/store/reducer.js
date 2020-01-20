import * as actionTypes from './constants'
// 这里用到 fromJS 把 JS 数据结构转化成 immutable 数据结构
import { fromJS } from 'immutable'

const defaultState = fromJS({
  bannerList: [],
  recommendList: []
})
