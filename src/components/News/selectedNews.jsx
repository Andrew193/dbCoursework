import s from "./style.module.css"
import { gql, useQuery } from "@apollo/client";
import Loader from "../Loader/Loader"
import Page404 from "../404Page/Page404"
import MakeNews from "./makeNews"
function SelectedNews(props) {
    const { loading, error, data } = useQuery(gql`{
        data : getSelectedNews(number:${window.location.href.split("/")[window.location.href.split("/").length-1]}){
            title
            date
            message
        }
      }
    `)
    if(!loading)
    props.notify()
    return(
        <div className={props.colorMode? s.Container+" "+props.NightMode:s.Container}>
            {error && <Page404 />}
            {loading && <Loader />}
            {!loading && <MakeNews toMake={data.data} s={props.colorMode?s.Light:s.Dark} />}
        </div>
    )
}
export default SelectedNews;