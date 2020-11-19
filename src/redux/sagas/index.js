import { all } from 'redux-saga/effects'
import getBCHSaga from "./sagas";
export default function* rootSaga() {
    yield all([
        getBCHSaga(),
    ]);
 }