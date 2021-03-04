import s from "./style.module.css"
function Page404(props) {

    return(
        <div className={props.colorMode? s.Container+" "+props.NightMode:s.Container}>
            <h1>404</h1>
        </div>
    )
}
export default Page404