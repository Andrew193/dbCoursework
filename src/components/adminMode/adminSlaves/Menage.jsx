import { useFormik } from "formik";
import { createRef, useState } from "react";
import {notify} from "../../Footer/footer"
import Script from "../script"
import s from "../style.module.css"
import AllPerson from "./allPerson"
import MForm from "./menageForm"
function MakeNews(props) {
    const[flag,setFlag]=useState(false),[flag2,setFlag2]=useState(false),
    Formik = useFormik({
        initialValues: {
          title: "",
          date:"",
          message:""
        },
        onSubmit: (values, { resetForm }) => Script.Ord(notify,values,props.t,resetForm)})
    return(
        <div className={s.AdminPanel} >
            <h2 onClick={(e)=>Script.show(e,s,notify,props.t)}>{props.t("admin.createNews")}</h2>
            <div>
            <MForm t={props.t} Formik={Formik}/>
            </div> 
            <h2 onClick={(e)=>Script.show(e,s,notify,props.t)}>{props.t("admin.showAllPerson")}</h2>
            <div>
                <button onClick={()=>setFlag(!flag)}>{props.t("admin.showAllPerson")}</button>
                {flag && <AllPerson t={props.t}/>}
            </div>
            <h2 onClick={(e)=>Script.show(e,s,notify,props.t)}>{props.t("admin.showByName")}</h2>
            <div >
                <input type="text" id="name"/><button onClick={()=>setFlag2(!flag2)}>{props.t("search")}</button>
                {flag2 && <AllPerson name={document.getElementById("name").value} t={props.t}/>}
            </div>
        </div>
    )
}
export default MakeNews;