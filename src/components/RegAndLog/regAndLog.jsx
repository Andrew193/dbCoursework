
import s from "./style.module.css"
function RegAndLog(props) {
    return (
        <div className={s.Container}>
            <form onSubmit={props.Formik.handleSubmit}>
                <label htmlFor="name" ><h1>{props.t("form.field1")}</h1>
                    <input type="name" id="name" {...props.Formik.getFieldProps("name")} />
                </label>
                <label htmlFor="password" ><h1>{props.t("form.field2")}</h1>
                    <input type="password" id="password" {...props.Formik.getFieldProps("password")} />
                </label>
                <button type="submit" className="MainFormButton">{props.t("form.reg")}</button>
                <button type="submit" className="MainFormButton">{props.t("form.log")}</button>
            </form>
        </div>
    )
}
export default RegAndLog;