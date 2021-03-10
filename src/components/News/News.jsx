import s from "./style.module.css"
import MakeNews from "./makeNews"
import Loader from "../Loader/Loader"
import Page404 from "../404Page/Page404"
import { gql, useQuery } from "@apollo/client";
function News(props) {
    const { loading, error, data } = useQuery(gql`{
        data : getNews{
            title
            date
            message
        }
      }
    `)
    return(
        <div className={props.colorMode? s.Container+" "+props.NightMode:s.Container}>
            {error && <Page404/>}
            {loading && <Loader />}
            {!loading && <MakeNews toMake={data.data} s={props.colorMode?s.Light:s.Dark}/>}
        </div>
    )
}
export default News