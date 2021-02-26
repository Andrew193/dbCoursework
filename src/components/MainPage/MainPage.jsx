import s from "./style.module.css"
import { useTranslation } from "react-i18next";
function MainPage(props) {
    const { t } = useTranslation();
    return (
        <div className={s.Container}>
            <div><h1>{t("title")}</h1></div>
            <div>{t("description.part1")}</div>
            <div>{t("description.part2")}</div>
        </div>
    )
}
export default MainPage