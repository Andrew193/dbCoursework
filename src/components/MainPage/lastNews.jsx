import { gql, useQuery } from "@apollo/client";
import Page404 from "../404Page/Page404";
import Loader from "../Loader/Loader";
import MakeNews from "../News/makeNews";
import s from "./style.module.css"

function LastNews(props) {
    const { loading, error, data } = useQuery(gql`{
        data : getNews(parametr:${1}){
            title
            date
            message
        }
      }
    `)
    return (
        <>
            {error && <Page404 />}
            {loading && <Loader />}
            {!loading && <>
                <h2>{props.t("description.last")}</h2>
                <section style={{display:"flex"}}><MakeNews toMake={data.data.slice(0,3)} s={props.colorMode ? s.Light : s.Dark} /></section>
            </>
            }
        </>
    )
}
export default LastNews;