
import s from "./style.module.scss"

function SmallNavbar(props) {
    return(
        <nav className={s.SmallNavbar}>
            <h2>{props.t("smallNav.title")}</h2>
            <ul>
                <li><a href={props.to2}>{props.t("smallNav.act1")}</a></li>
                <li><a href={props.to1}>{props.t("smallNav.act2")}</a></li>
            </ul>
        </nav>
    )
}
export default SmallNavbar;