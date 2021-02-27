import { useState } from "react";
import { useDispatch } from "react-redux";
import s from "../style.module.css"
import Script from "./script"
function CgLg(props) {
    const [flag,setFlag]=useState(false)
    const dispatch=useDispatch()
    return(
        <nav>
        {!flag?<div onClick={()=>setFlag(!flag)} className={s.ToggleLg}>{props.t("nav.cgLg")}</div>:<>
        <button className={props.colorMode?s.colorMode:""} onClick={() =>{
            setFlag(!flag)
            props.changeLanguage("uk")}}>Українська</button>
        <button className={props.colorMode?s.colorMode:""} onClick={() =>{ 
            setFlag(!flag)
            props.changeLanguage("ru")}}>Русский</button></>
        }
        <button className={props.colorMode?s.colorMode:""} onClick={Script.leave}>{props.t("nav.changeStatus")}</button>
        <button className={props.colorMode?s.colorMode:""} onClick={()=>dispatch({type:"changeMode"}) }>{props.t("nav.colorMode")}</button>
        </nav>
    )
}
export default CgLg;