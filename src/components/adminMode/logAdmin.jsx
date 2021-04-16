import { useDispatch, useSelector } from "react-redux"
import s from "./style.module.scss"
import AdminForm from "./adminForm" 
import Script from "./script"
import { Redirect } from "react-router"
function LogAdmin(props) {
    const password = 'sup21-admin65-mode96-acse34',dispatch=useDispatch(),isAdmin = useSelector((state) => state.admin.isAdmin)
    return (
        <div className={props.colorMode? s.Container+" "+props.NightMode:s.Container}>{isAdmin && <Redirect to="/test/rest/props/masket/supModePage" />}
            {isAdmin ? <AdminForm t={props.t} />:<div> 
                <h1>{props.t("admin.title")}</h1>
                <input type="text" onInput={(e)=>Script.comp(e,password,dispatch)} />
                </div>}
        </div>
    )
}
export default LogAdmin;