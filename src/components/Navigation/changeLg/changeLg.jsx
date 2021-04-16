import { useState } from "react";
import { useDispatch } from "react-redux";
import s from "../style.module.scss"
import Script from "./script"
function CgLg(props) {
    const [flag,setFlag]=useState(false),dispatch=useDispatch()
    return(
        <nav>
        {!flag?<div onClick={()=>setFlag(!flag)} className={s.ToggleLg}>{props.t("nav.cgLg")}</div>:<>
        <button className={props.colorMode?s.colorMode:""} onClick={() =>{
            setFlag(!flag)
            dispatch({type:"changeLangMode"})
            props.changeLanguage("uk")}}>Українська</button>
        <button className={props.colorMode?s.colorMode:""} onClick={() =>{ 
            setFlag(!flag)
            dispatch({type:"changeLangModeRu"})
            props.changeLanguage("ru")}}>Русский</button></>
        }
        {!flag &&<><button className={props.colorMode?s.colorMode:""} onClick={Script.leave}>{props.t("nav.changeStatus")}</button>
        <button className={props.colorMode?s.colorMode:""} onClick={()=>dispatch({type:"changeMode"}) }>{props.t("nav.colorMode")}</button>
        </>}
        </nav>
    )
}
export default CgLg;