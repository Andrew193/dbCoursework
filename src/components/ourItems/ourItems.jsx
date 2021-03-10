import Loader from "../Loader/Loader"
import s from "./style.module.css"
import Page404 from "../404Page/Page404"
import { gql, useQuery } from "@apollo/client";
import ItemsMaker from "./itemsMaker"
import { NavLink } from "react-router-dom";
function OurItems(props) {
    const { loading, error, data } = useQuery(gql`{
        data : getItems{
           Name
           AuthorName
        }
      }`)
    return(
        <div className={props.colorMode? s.Container+" "+props.NightMode:s.Container}>
            {error && <Page404/>}
            {loading && <Loader />}
            {!loading && <ItemsMaker t={props.t} data={data.data} s={!props.colorMode?s.Light:s.Dark}/>}
            <h2><NavLink to={"/ourItems/regCom"} className={props.colorMode ? s.colorMode : ""}>
            {props.t("ourItems.FormCom")}</NavLink></h2>
            <h2><NavLink to={"/ourItems/regUn"} className={props.colorMode ? s.colorMode : ""}>
            {props.t("ourItems.FormUn")}</NavLink></h2>
        </div>
    )
}
export default OurItems;