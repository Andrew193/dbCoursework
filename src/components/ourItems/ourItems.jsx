import Loader from "../Loader/Loader"
import s from "./style.module.css"
import Page404 from "../404Page/Page404"
import { gql, useQuery } from "@apollo/client";
import ItemsMaker from "./itemsMaker"
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Script from "./forms/sendOrder"
function OurItems(props) {
    let In=null;
    const [page,setPage]=useState(1),{ loading, error, data } = useQuery(gql`{
        data :getItems(parametr:${page}){
           Name
           AuthorName
           pagesCount
           circulation
           itemCode
        }
         data2:getSize{
            Size
        }
      }`)
    return(
        <div className={props.colorMode? s.Container+" "+props.NightMode:s.Container}>
            {error && <Page404/>}
            {loading && <Loader />}
            {!loading && <ItemsMaker t={props.t} data={data.data} s={!props.colorMode?s.Light:s.Dark}/>}
            {data &&  <div>{page}<input type="number" style={{margin:"0px 15px"}} ref={(el)=>In=el} max={`${Script.ToRound(data.data2.Size)-1}`} onBlur={()=>setPage(In.value)} ></input>{Script.ToRound(data.data2.Size)-1}</div>}
            <h2><NavLink to={"/ourItems/regCom"} className={props.colorMode ? s.colorMode : ""}>
            {props.t("ourItems.FormCom")}</NavLink></h2>
            <h2><NavLink to={"/ourItems/regUn"} className={props.colorMode ? s.colorMode : ""}>
            {props.t("ourItems.FormUn")}</NavLink></h2>
            <h2><NavLink to={"/ourItems/authors"} className={props.colorMode ? s.colorMode : ""}>
            {props.t("nav.item.part6")}</NavLink></h2>
        </div>
    )
}
export default OurItems;