import { useState } from "react"
import { useSelector } from "react-redux"
import s from "./style.module.css"
import AdminForm from "./adminForm" 
import { Redirect } from "react-router"
function LogAdmin(props) {
    const password = 'sup21-admin65-mode96-acse34'
    const isAdmin = useSelector((state) => state.admin.isAdmin)
    const [flag, setFlag] = useState(false)
    return (
        <div className={props.colorMode? s.Container+" "+props.NightMode:s.Container}>{isAdmin && <Redirect to="/supModePage" />}
            {flag ? <AdminForm t={props.t} />:<div> 
                <h1>{props.t("admin.title")}</h1>
                <input type="text" onInput={(e)=>{if(e.target.value===password)setFlag(!flag)}} />
                </div>}
        </div>
    )
}
export default LogAdmin;