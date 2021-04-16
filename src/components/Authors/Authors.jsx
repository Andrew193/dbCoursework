import s from "./style.module.scss"
import Loader from "../Loader/Loader"
import Page404 from "../404Page/Page404"
import { gql, useQuery } from "@apollo/client";
import MakeItems from "./MakeItems"
function Authors(props) {
    const { loading, error, data } = useQuery(gql`{
        data : getAllAuthors{
            Name
            age 
            phone 
            adress
        }
      }
    `)
    return (
        <div className={props.colorMode ? s.Container + " " + props.NightMode : s.Container}>
            {error && <Page404 />}
            {loading && <Loader />}
            {!loading && <MakeItems t={props.t} toMake={data.data} s={props.colorMode?s.Light:s.Dark} />}
        </div>
    )
}
export default Authors;