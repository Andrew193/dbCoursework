import { MdMail } from "react-icons/md";
import s from "./style.module.css"
function Footer(props) {
    return (
        <div className={props.colorMode? s.Container+" "+s.colorMode+" "+props.NightMode:s.Container}>
            <h4>
                @ 2021 - {new Date().getFullYear() + props.t("footer.title")}
            </h4>
            <p className={s.Mail}><MdMail /><a href={"mailto:sadovinskiy@gmail.com"}>{props.t("footer.request")}</a></p>
        </div>
    )
}
export default Footer