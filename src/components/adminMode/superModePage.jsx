import s from "./style.module.scss"
import { useSelector } from 'react-redux';
import { Redirect } from "react-router";
import MenageContainer from "./adminSlaves/MenageContainer";
function SMP(props) {
    const flag=useSelector((state)=>state.admin.isAdmin)
    return(
       <>{flag?
       <div className={props.colorMode? s.Container+" "+props.NightMode:s.Container}>
            <MenageContainer t={props.t} />
        </div>:<Redirect to="/404" />
}</>
    )
}
export default SMP;