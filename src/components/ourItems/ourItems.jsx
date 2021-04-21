import Loader from "../Loader/Loader"
import s from "./style.module.scss"
import Page404 from "../404Page/Page404"
import { gql, useQuery } from "@apollo/client";
import ItemsMaker from "./itemsMaker"
import { useState } from "react";
import PagLine from "./pagLine";
import NavbarItems from "./navbar";
function OurItems(props) {
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
            {data &&  <PagLine page={page} setPage={setPage} data={data}/>}
            <NavbarItems colorMode={props.colorMode} s={s} t={props.t} />
        </div>
    )
}
export default OurItems;