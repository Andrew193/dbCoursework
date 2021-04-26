import Script from "./script"
import s from "./style.module.scss"
function RegAndLog(props) {
    return (
        <div className={s.Container}>
            <form onSubmit={props.Formik.handleSubmit} autoComplete="off">
                <h1>{props.t("form.reg")}/{props.t("form.log")}</h1>
                <div><input type="name" autoComplete={"off"} id="name" {...props.Formik.getFieldProps("name")} />
                    <span className={s.Tip}>Name</span></div>
                {props.Formik.touched.name && props.Formik.errors.name && <span className={s.Error + " " + s.f1}>{props.Formik.errors.name}</span>}
                <div><input type="password" id="password" {...props.Formik.getFieldProps("password")} />
                    <span className={s.Tip}>Password</span></div>
                {props.Formik.touched.password && props.Formik.errors.password && <span className={s.Error + " " + s.f2}>{props.Formik.errors.password}</span>}
                <button type="submit" className={s.welcB} onClick={() => Script.reg(true)}>►</button>
                <p>forgot your password? <a href="#">click here</a></p>
            </form>
        </div>
    )
}
export default RegAndLog;