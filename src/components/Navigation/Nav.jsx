import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import s from "./style.module.css"
import ChangeLg from "./changeLg/changeLg"
function Nav(props) {
    const {i18n } = useTranslation();
    const changeLanguage = (language) => {i18n.changeLanguage(language);};
    return (
        <nav className={s.Navbar}>
            <ul>
                <li><NavLink exact to={"/"} activeClassName={s.activeLink}>{props.t("nav.main")}</NavLink></li>
                <li><NavLink exact to={"/about"} activeClassName={s.activeLink}>{props.t("nav.about")}</NavLink></li>
                <li><NavLink exact to={"/news"} activeClassName={s.activeLink}>{props.t("nav.news")}</NavLink></li>
                <li><NavLink exact to={"/contact"} activeClassName={s.activeLink}>{props.t("nav.contacts")}</NavLink></li>
            </ul>
            <ChangeLg changeLanguage={changeLanguage} t={props.t}/>
        </nav>
    )
}
export default Nav;