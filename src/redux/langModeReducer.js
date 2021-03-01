let initState=(JSON.parse(localStorage.getItem("langMode"))?.mode)?
{mode:JSON.parse(localStorage.getItem("langMode"))?.mode}:{mode:"uk"}
function Reducer(state=initState,action) {
    switch (action.type) {
        case "changeLangModeRu":{
            localStorage.setItem("langMode",JSON.stringify({mode:"ru"}))
            return JSON.parse(JSON.stringify(JSON.parse(localStorage.getItem("langMode"))))
        }
        case "changeLangMode":{
            localStorage.setItem("langMode",JSON.stringify({mode:"uk"}))
            return JSON.parse(JSON.stringify(JSON.parse(localStorage.getItem("langMode"))))
        }
        default:
            return JSON.parse(JSON.stringify(state))
    }
}
export default Reducer;