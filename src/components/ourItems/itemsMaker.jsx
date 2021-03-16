import s from "./style.module.css"
const { v4: uuidv4 } = require('uuid');
function Maker(props) {
    return (<>{props.data.map((value) => <div className={s.NewsItem + " " + props.s} key={uuidv4()} >
    <p>{props.t("nav.item.part1")}<u>{value.Name}</u>, {props.t("nav.item.part2")}{value.AuthorName}</p>
    <p>{props.t("nav.item.part3")} <u>{value.pagesCount}</u></p>
    <p>{props.t("nav.item.part4")} <u>{value.circulation}</u></p>
    <p>{props.t("nav.item.part5")} <u>{value.itemCode}</u></p>
    </div>)}</>)
}
export default Maker;