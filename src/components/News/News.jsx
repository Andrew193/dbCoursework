import s from "./style.module.css"
import MakeNews from "./makeNews"
import Loader from "../Loader/Loader"
import Page404 from "../404Page/Page404"
import { gql, useQuery } from "@apollo/client";
import PagLine from "../ourItems/pagLine";
import { useState } from "react";
function News(props) {
    const [page,setPage]=useState(1)
    const { loading, error, data } = useQuery(gql`{
        data : getNews(parametr:${page}){
            title
            date
            message
        }
        data2:getSizeOfNews{
            Size
        }
      }
    `)
    console.log(data,error);
    return (
        <div className={props.colorMode ? s.Container + " " + props.NightMode : s.Container}>
            {error && <Page404 />}
            {loading && <Loader />}
            {!loading && <MakeNews toMake={data.data} s={props.colorMode ? s.Light : s.Dark} />}
            {data &&  <PagLine page={page} setPage={setPage} data={data}/>}
        </div>
    )
}
export default News