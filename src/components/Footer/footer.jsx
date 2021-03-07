import { useState } from "react";
import { MdMail } from "react-icons/md";
import s from "./style.module.css"
function Footer(props) {
    const [flag, setFlag] = useState(false)
    return (<>
        <div className={props.colorMode ? s.Container + " " + s.colorMode + " " + props.NightMode : s.Container}>
            <h4>
                @ 2021 - {new Date().getFullYear() + props.t("footer.title")}
            </h4>
            <p className={s.Mail}><MdMail /><a href={"mailto:sadovinskiy@gmail.com"}>{props.t("footer.request")}</a></p>
            <button onClick={() => setFlag(!flag)}>{props.t("footer.form.title")}</button>
            {flag && <>
                <form action="/sendResponse" className={s.ModalContent}>
                <h1>{props.t("footer.form.field1")}</h1>
                <textarea></textarea>
                <h2>{props.t("footer.form.field2")}</h2>
                <input type="email"></input>
                <button onClick={() => setFlag(!flag)} type="submit">{props.t("footer.form.closeButton")}</button>
            </form>
                <div className={s.Modal}>
                </div></>}
        </div>
    </>
    )
}
export default Footer