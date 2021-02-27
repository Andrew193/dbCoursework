

function Reducer(state={mode:false},action) {
    switch (action.type) {
        case "changeMode":{
            state.mode=!state.mode
            return JSON.parse(JSON.stringify(state))
        }
        default:
            return JSON.parse(JSON.stringify(state))
    }
}
export default Reducer;