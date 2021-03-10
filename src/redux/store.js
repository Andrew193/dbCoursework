import { combineReducers, createStore } from "redux";
import colorReducer from "./colorModeReducer"
import langReducer from "./langModeReducer"
import AdminReducer from "./adminReducer"

let store=createStore(combineReducers({
    colorMode:colorReducer,
    lgMode:langReducer,
    admin:AdminReducer
}))
export default store