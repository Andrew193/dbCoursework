import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import s from "./style.module.css"
function Nav(props) {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    return (
        <nav className={s.Navbar}>
            <ul>
                <li>
                    <NavLink exact to={"/"} activeClassName={s.activeLink}>{t("nav.main")}</NavLink>
                </li>
                <li>
                    <NavLink exact to={"/about"} activeClassName={s.activeLink}>{t("nav.about")}</NavLink>
                </li>
            </ul>
            <nav>
                <button onClick={() => changeLanguage("uk")}>Українська</button>
                <button onClick={() => changeLanguage("ru")}>Русский</button>
           </nav>
        </nav>
    )
}
export default Nav;