import { call, put, takeLatest } from 'redux-saga/effects'
import {getBCHHistoryPrices, getCurrentBCHPrice, getNewsFeed} from '../services/apiCalls'
import {formatPricing} from '../../controllers/dataHandler'
// worker Saga
function* fetchBCHHistoryData(action) {
   try {
     const priceHistory = yield call(getBCHHistoryPrices);
     const formattedData = formatPricing(priceHistory);
     yield put({type: "BCH_DATA_FETCH_SUCCEEDED",  payload: formattedData});
   } catch (e) {
      yield put({type: "BCH_DATA_FETCH_FAILED", message: e.message});
   }
}

function* fetchBCHCurrentPrice(action) {
   try {
     const currentPrice = yield call(getCurrentBCHPrice)
     yield put({type: "BCH_CURRENT_PRICE_SUCCESS", currentPrice: currentPrice});
   } catch (e) {
      yield put({type: "BCH_CURRENT_PRICE_FAIL", message: e.message});
   }
}

function* updateRange(action){
   try{
      yield put({type: "CHANGE_RANGE_SUCCESSFUL", payload: action.payload})
   } catch(e){
      yield put({type: "CHANGE_RANGE_FAIL", message: e.message});
   }
}

function* getLatestNews(action){
   try{
      const news = yield call(getNewsFeed);
      yield put({type: "GET_NEWS_FEED_SUCCESS", payload: news})
   } catch(e){
      yield put({type: "GET_NEWS_FEED_FAIL", message: e.message});
   }
}

function* mySaga() {
  yield takeLatest("BCH_PRICE_HISTORY_REQUESTED", fetchBCHHistoryData);
  yield takeLatest("BCH_CURRENT_PRICE_REQUESTED", fetchBCHCurrentPrice);
  yield takeLatest("CHANGE_RANGE_REQUESTED", updateRange);
  yield takeLatest("GET_NEWS_FEED_REQUESTED", getLatestNews);
}

export default mySaga;