import { useState } from "react";
import { MdMail } from "react-icons/md";
import s from "./style.module.css"
import Script from "./script"
import { toast } from 'react-toastify';
import { useTranslation } from "react-i18next";
const notify = (message) => toast(`${message}!`);
function Footer(props) {
    
    const { t } = useTranslation();
    const [flag, setFlag] = useState(false)
    return (<>
        <div className={props.colorMode ? s.Container + " " + s.colorMode + " " + props.NightMode : s.Container}>
            <h4>
                @ 2021 - {new Date().getFullYear() + props.t("footer.title")}
            </h4>
            <p className={s.Mail}><MdMail /><a href={"mailto:sadovinskiy@gmail.com"}>{props.t("footer.request")}</a></p>
            <button onClick={() => setFlag(!flag)}>{props.t("footer.form.title")}</button>
            {flag && <>
                <form  className={s.ModalContent}>
                <h1>{props.t("footer.form.field1")}</h1>
                <textarea id="text" name="text"></textarea>
                <h2>{props.t("footer.form.field2")}</h2>
                <input type="email" id="email" name="email"></input>
                <button onClick={(e) => Script.sendResponse(e,flag,setFlag,document.forms[0],notify,t)} >{props.t("footer.form.closeButton")}
                </button>
            </form>
                <div className={s.Modal}>
                </div></>}
        </div>
    </>
    )
}
export default Footer
export {notify}