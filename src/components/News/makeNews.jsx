import s from "./style.module.scss"
import Script from "./script"
import { useHistory } from "react-router";
const { v4: uuidv4 } = require('uuid');

function MakeNews(props) {
    const history=useHistory()
    let items=null;
    if(Array.isArray(props.toMake)){
    items=props.toMake.map((value,index)=><div data-newnumber={index+1}  key={uuidv4()} className={s.NewsItem+" "+props.s
    +" "+s.NewsItemGroup}
    onClick={(e)=> Script.selectNews(e.currentTarget,history)} >
        <h2>{value.title}</h2>
        <div className={s.CreatedAt}>{value.date}</div>
        <p>{value.message}</p>
    </div>)
    } else {
       items=(<div key={uuidv4()} className={s.NewsItem+" "+props.s}>
        <h2>{props.toMake.title}</h2>
        <div className={s.CreatedAt}>{props.toMake.date}</div>
        <p>{props.toMake.message}</p>
    </div>)
    }
    return(
        <>
        {items}
        </>
    )
}
export default MakeNews;