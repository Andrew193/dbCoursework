import s from "./style.module.css"
const { v4: uuidv4 } = require('uuid');
function Maker(props) {
    const items = props.data.map((value,index) => <div className={s.NewsItem + " " + props.s} 
    key={uuidv4()} >
        {props.t("nav.item.part1")}<u>{value.Name}</u>, {props.t("nav.item.part2")}{value.AuthorName}</div>)
    return (<>{items}</>)
}
export default Maker;