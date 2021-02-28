
import s from "./style.module.css"
function Footer(props) {
    return (
        <div className={s.Container}>
            <h4>
                @ 2021 - {new Date().getFullYear() + props.t("footer.title")}
            </h4>
        </div>
    )
}
export default Footer