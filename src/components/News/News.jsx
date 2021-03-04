import s from "./style.module.css"
import { useSelector } from "react-redux"
import MakeNews from "./makeNews"
function News(props) {
    const news=useSelector(state=>state.news)
    return(
        <div className={props.colorMode? s.Container+" "+props.NightMode:s.Container}>
            <MakeNews toMake={news} s={props.colorMode?s.Light:s.Dark}/>
        </div>
    )
}
export default News