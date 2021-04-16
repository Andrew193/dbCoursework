import s from "../style.module.scss"

function MakePersons(props) {
    return(<div className={s.ItemsContainer}>
     {(props.toMake?(props.toMake.map((value)=><p>{value.FullName} - {value.Password}</p>)):<p>{props.t("reject")}</p>)}
    </div>)
}
export default MakePersons