import img from "./loader.gif"
import s from "./style.module.css"
function Loader() {
    return(
        <div className={s.Container}>
            <img src={img} height={200} width={200} alt={"Loading..."}/>
        </div>
    )
}
export default Loader;