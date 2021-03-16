import s from "./style.module.css"
const { v4: uuidv4 } = require('uuid');
function MakeItems(props) {
    return(
        <>
        {props.toMake.map((value)=><div key={uuidv4()} className={s.NewsItem+" "+props.s} >
        <h2>{props.t("authors.name")} <u>{value.Name}</u></h2>
        <p>{props.t("authors.age")} <u>{value.age}</u></p>
        <p>{props.t("authors.phone")} <u>{value.phone}</u></p>
        <p>{props.t("authors.adress")} <u>{value.adress}</u></p>
        </div>)}
        </>
    )
}
export default MakeItems;