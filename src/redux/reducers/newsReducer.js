import * as type from '../types'

let initalState = {
  newsFeed: null,
  loading: true,
  success: false,
  error: null,
}
const newsReducer = (state = initalState, action) => {
  switch (action.type) {
    case type.GET_NEWS_FEED_REQUESTED:
      return { ...state, loading: true }
    case type.GET_NEWS_FEED_SUCCESS:
      return {
        ...state,
        newsFeed: action.payload,
        loading: false,
        success: true,
      }
    case type.GET_NEWS_FEED_FAIL:
      return { ...state, loading: false, success: false }
    default:
      return state
  }
}

export default newsReducer
