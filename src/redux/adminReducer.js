debugger
let initState=(JSON.parse(localStorage.getItem("isAdmin"))?.isAdmin)?
{isAdmin:JSON.parse(localStorage.getItem("isAdmin"))?.isAdmin}:{isAdmin:false}
function Reducer(state=initState,action) {
    switch (action.type) {
        case "setAdmin":{
            localStorage.setItem("isAdmin",JSON.stringify({isAdmin:true}))
            return JSON.parse(JSON.stringify(JSON.parse(localStorage.getItem("isAdmin"))))
        }
        default:
            return JSON.parse(JSON.stringify(state))
    }
}
export default Reducer;