import { combineReducers, createStore } from "redux";
import colorReducer from "./colorModeReducer"


let store=createStore(combineReducers({
    colorMode:colorReducer
}))
export default store