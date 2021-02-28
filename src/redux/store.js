import { combineReducers, createStore } from "redux";
import colorReducer from "./colorModeReducer"
import langReducer from "./langModeReducer"

let store=createStore(combineReducers({
    colorMode:colorReducer,
    lgMode:langReducer
}))
export default store