import { useState } from "react";
import s from "../style.module.css"
import Script from "./script"
function CgLg(props) {
    let [flag,setFlag]=useState(false)
    return(
        <nav>
        {!flag?<div onClick={()=>setFlag(!flag)} className={s.ToggleLg}>{props.t("nav.cgLg")}</div>:<>
        <button onClick={() =>{
            setFlag(!flag)
            props.changeLanguage("uk")}}>Українська</button>
        <button onClick={() =>{ 
            setFlag(!flag)
            props.changeLanguage("ru")}}>Русский</button></>
        }
        <button onClick={Script.leave}>{props.t("nav.changeStatus")}</button></nav>
    )
}
export default CgLg;