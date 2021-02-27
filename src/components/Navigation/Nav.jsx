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
                <li><NavLink exact to={"/"} activeClassName={s.activeLink}
                className={props.colorMode?s.colorMode:""}>{props.t("nav.main")}</NavLink></li>
                <li><NavLink exact to={"/about"} activeClassName={s.activeLink}
                 className={props.colorMode?s.colorMode:""}>{props.t("nav.about")}</NavLink></li>
                <li><NavLink exact to={"/news"} activeClassName={s.activeLink}
                 className={props.colorMode?s.colorMode:""}>{props.t("nav.news")}</NavLink></li>
                <li><NavLink exact to={"/contact"} activeClassName={s.activeLink}
                 className={props.colorMode?s.colorMode:""}>{props.t("nav.contacts")}</NavLink></li>
            </ul>
            <ChangeLg changeLanguage={changeLanguage} colorMode={props.colorMode} t={props.t}/>
        </nav>
    )
}
export default Nav;