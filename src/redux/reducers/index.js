import { combineReducers} from "redux";
// Reducer
import bchReducer from "./bchReducer.js";
import newsReducer from "./newsReducer.js";

export default combineReducers({
    bchReducer, 
    newsReducer
});
