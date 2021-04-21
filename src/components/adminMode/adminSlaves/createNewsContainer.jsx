import MForm from "./menageForm"
import Script from "../script"
function CreateNewsContainer(props) {
    return(<>
        <h2 onClick={(e) => Script.show(e, props.s, props.notify, props.t)}>{props.t("admin.createNews")}</h2>
        <section>
            <MForm t={props.t} Formik={props.Formik} />
        </section>
    </>)
}
export default CreateNewsContainer;