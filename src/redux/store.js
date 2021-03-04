import { combineReducers, createStore } from "redux";
import colorReducer from "./colorModeReducer"
import langReducer from "./langModeReducer"
import NewsReducer from "./newsReducer"
import AdminReducer from "./adminReducer"

let store=createStore(combineReducers({
    colorMode:colorReducer,
    lgMode:langReducer,
    news:NewsReducer,
    admin:AdminReducer
}))
export default store