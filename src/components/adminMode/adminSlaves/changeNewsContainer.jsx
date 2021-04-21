import CorNews from "./corNews";


function ChangeNewsContainer(props) {
    return(<>
        <h2 onClick={(e) => props.Script.show(e, props.s, props.notify, props.t)}>{props.t("admin.changeNews")}</h2>
            <section>
                <CorNews Formik2={props.Formik2} t={props.t} />
            </section></>
    )
}
export default ChangeNewsContainer;