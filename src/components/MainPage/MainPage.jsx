import s from "./style.module.css"
import Script from "./Script"
function MainPage(props) {
    return (
        <div className={props.colorMode? s.Container+" "+props.NightMode:s.Container}>
                <h1 className={s.MainTitle}>{props.t("title")}</h1>
                <button onClick={Script.toBottom}>{props.t("navigation.bottom")}</button>
                <h2>{props.t("description.part1")}</h2>
                <p >{props.t("description.part2")}</p>
                <h2>{props.t("description.part3")}</h2>
                <p>{props.t("description.part4")}</p>
                <p>{props.t("description.part5")}</p>
                <h2>{props.t("description.part6")}</h2>
                <p>{props.t("description.part7")}</p>
                <h2>{props.t("description.part8")}</h2>
                <p>{props.t("description.part9")}</p>
                <h2>{props.t("description.part8")}</h2>
                <p>{props.t("description.part9")}<br /><br />
                {props.t("description.part9")}</p>
                <button onClick={Script.toTop}>{props.t("navigation.top")}</button>
        </div>
    )
}
export default MainPage