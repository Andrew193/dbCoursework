let initState=(JSON.parse(localStorage.getItem("colorMode"))?.mode)?
{mode:JSON.parse(localStorage.getItem("colorMode"))?.mode}:{mode:false}
function Reducer(state=initState,action) {
    switch (action.type) {
        case "changeMode":{
            localStorage.setItem("colorMode",JSON.stringify({mode:!state.mode}))
            return JSON.parse(JSON.stringify(JSON.parse(localStorage.getItem("colorMode"))))
        }
        default:
            return JSON.parse(JSON.stringify(state))
    }
}
export default Reducer;