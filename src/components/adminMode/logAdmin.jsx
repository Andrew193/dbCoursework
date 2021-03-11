import { useDispatch, useSelector } from "react-redux"
import s from "./style.module.css"
import AdminForm from "./adminForm" 
import { Redirect } from "react-router"
function LogAdmin(props) {
    const password = 'sup21-admin65-mode96-acse34'
    const dispatch=useDispatch()
    const isAdmin = useSelector((state) => state.admin.isAdmin)
    return (
        <div className={props.colorMode? s.Container+" "+props.NightMode:s.Container}>{isAdmin && <Redirect to="/test/rest/props/masket/supModePage" />}
            {isAdmin ? <AdminForm t={props.t} />:<div> 
                <h1>{props.t("admin.title")}</h1>
                <input type="text" onInput={(e)=>{if(e.target.value===password)dispatch({"type":"setAdmin"})}} />
                </div>}
        </div>
    )
}
export default LogAdmin;