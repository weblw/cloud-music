import React, { useEffect } from 'react'
import Slider from '../../components/slider'
import RecommendList from '../../components/list'
import { Content } from './style'
import Scroll from '../../baseUI/scroll'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'

function Recommend(props) {
  const { bannerList, recommendList } = props
  const { getBannerDataDispatch, getRecommendDataDispatch } = props

  useEffect(() => {
    getBannerDataDispatch()
    getRecommendDataDispatch()
    //eslint-disable-next-line
  }, [])

  const bannerLIstJS = bannerList ? bannerList.toJS() : []
  const recommendLIstJS = recommendList ? recommendList.toJS() : []

  return (
    <Content>
      <div className="before"></div>
      <Scroll className="list">
        <div>
          <Slider bannerList={bannerLIstJS}></Slider>
          <RecommendList recommendList={recommendLIstJS}></RecommendList>
        </div>
      </Scroll>
    </Content>
  )
}

// 映射 Redux 全局的 state 到组件的 props 上
const mapStateToProps = state => ({
  // 不要在这里将数据 toJS
  // 不然每次 diff 比对 props 的时候都是不一样的引用，还是导致不必要的重渲染，属于滥用 immutable
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList'])
})
// 映射 dispatch 到 props 上
const mapDispatchToProps = dispatch => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList())
    },
    getRecommendDataDispatch() {
      dispatch(actionTypes.getRecommendList())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Recommend))
