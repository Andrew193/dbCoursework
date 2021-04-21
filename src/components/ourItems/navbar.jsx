import { NavLink } from "react-router-dom";

function NavbarItems(props) {
    return(
        <ul className={props.s.bottomNav}>
            <li><NavLink to={"/ourItems/regCom"} className={props.colorMode ? props.s.colorMode : ""}>
            {props.t("ourItems.FormCom")}</NavLink></li>
            <li><NavLink to={"/ourItems/regUn"} className={props.colorMode ? props.s.colorMode : ""}>
            {props.t("ourItems.FormUn")}</NavLink></li>
            <li><NavLink to={"/ourItems/authors"} className={props.colorMode ? props.s.colorMode : ""}>
            {props.t("nav.item.part6")}</NavLink></li>
        </ul>
    )
}
export default NavbarItems;