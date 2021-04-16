import Script from "./script"
import s from "./style.module.scss"
function RegAndLog(props) {
    return (
        <div className={s.Container}>
            <form onSubmit={props.Formik.handleSubmit}>
                <label htmlFor="name" ><h1>{props.t("form.field1")}</h1>
                    <input type="name" id="name" {...props.Formik.getFieldProps("name")} />
                    {props.Formik.touched.name && props.Formik.errors.name &&<p className={s.Error}>{props.Formik.errors.name}</p>}
                </label>
                <label htmlFor="password" ><h1>{props.t("form.field2")}</h1>
                    <input type="password" id="password" {...props.Formik.getFieldProps("password")} />
                    {props.Formik.touched.password && props.Formik.errors.password &&<p className={s.Error}>{props.Formik.errors.password}</p>}
                </label>
                <button type="submit" className="MainFormButton" onClick={()=>Script.reg(true)}>{props.t("form.reg")}</button>
                <button type="submit" className="MainFormButton" onClick={()=>Script.reg(false)}>{props.t("form.log")}</button>
            </form>
        </div>
    )
}
export default RegAndLog;