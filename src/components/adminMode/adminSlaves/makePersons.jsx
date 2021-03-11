import s from "../style.module.css"

function MakePersons(props) {
    const items=props.toMake.map((value)=><p>{value.FullName} - {value.Password}</p>)
    return(<div className={s.ItemsContainer}>
     {items.length>0?items:<p>{props.t("reject")}</p>}
    </div>)
}
export default MakePersons