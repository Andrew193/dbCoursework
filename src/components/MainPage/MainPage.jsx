import s from "./style.module.css"
function MainPage(props) {
    return (
        <div className={s.Container}>
            <div><h1>{props.t("title")}</h1></div>
            <div>{props.t("description.part1")}</div>
            <div>{props.t("description.part2")}</div>
        </div>
    )
}
export default MainPage