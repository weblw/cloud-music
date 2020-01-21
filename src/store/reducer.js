import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '../application/Recommend/store/index'
import { reducer as singersReducer } from '../application/Singers/store/index'

export default combineReducers({
  // 添加具体的reducer
  recommend: recommendReducer,
  singers: singersReducer
})
