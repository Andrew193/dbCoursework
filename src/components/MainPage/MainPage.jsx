import s from "./style.module.css"
import Script from "./Script"
import { NavLink } from "react-router-dom"
import LastNews from "./lastNews"
import Items from "../Contacts/Maker"
function MainPage(props) {
    return (
        <div className={props.colorMode ? s.Container + " " + props.NightMode : s.Container}>
            <h1 className={s.MainTitle}>{props.t("title")}</h1>
            <button onClick={Script.toBottom}>{props.t("navigation.bottom")}</button>
            <h2>{props.t("description.part1")}</h2>
            <p >{props.t("description.part2")}</p>
            <NavLink className={s.AboutLink} exact to={"/about"}>{props.t("description.more")}</NavLink>
            <h2>{props.t("description.part3")}</h2>
            <p>{props.t("description.part4")}</p>
            <p>{props.t("description.part5")}</p>
            <h2>{props.t("description.part6")}</h2>
            <p>{props.t("description.part7")}</p>
            <LastNews t={props.t} colorMode={props.colorMode}/>
            <h2>{props.t("description.part8")}</h2>
            <p>{props.t("description.part9")}</p>
            <h2>{props.t("description.part8")}</h2>
            <p>{props.t("description.part9")}<br /><br />
            {props.t("description.part9")}</p>
            <h2>{props.t("contacts.shortInfo")}</h2>
            <Items values={["+3801111111111"]} type={"phone"} />
            <Items values={["example@gmail.com"]} type={"email"} />
            <button onClick={Script.toTop}>{props.t("navigation.top")}</button>
        </div>
    )
}
export default MainPage