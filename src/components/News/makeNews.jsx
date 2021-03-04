import s from "./style.module.css"
const { v4: uuidv4 } = require('uuid');

function MakeNews(props) {
    const items=props.toMake.map((value)=><div  key={uuidv4()} className={s.NewsItem+" "+props.s}>
        <h2>{value.title}</h2>
        <div className={s.CreatedAt}>{value.date}</div>
        <p>{value.message}</p>
    </div>)
    return(
        <>
        {items}
        </>
    )
}
export default MakeNews;