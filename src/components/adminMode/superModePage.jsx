import { useState } from "react";
import s from "./style.module.css"
import { useSelector } from 'react-redux';
import { Redirect } from "react-router";
function SMP(props) {
    const flag=useSelector((state)=>state.admin.isAdmin)
    return(
       <>{flag?
       <div className={props.colorMode? s.Container+" "+props.NightMode:s.Container}>
            <p>Вы админ</p>
        </div>:<Redirect to="/404" />
}</>
    )
}
export default SMP;