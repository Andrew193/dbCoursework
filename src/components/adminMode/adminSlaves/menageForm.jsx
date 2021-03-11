

function MForm(props) {
    return(
        <form onSubmit={props.Formik.handleSubmit}>
            <p>
                <h2>{props.t("admin.Form.title")}</h2>
            </p>
            <p>
                <h2>{props.t("admin.Form.field1")}</h2>
                <input type="text" name="title" id="title" {...props.Formik.getFieldProps("title")}/>
            </p>
            <p>
                <h2>{props.t("admin.Form.field2")}</h2>
                <input type="text" name="date" id="date" {...props.Formik.getFieldProps("date")}/>
            </p>
            <p>
                <h2>{props.t("admin.Form.field3")}</h2>
                <textarea type="text" name="message" id="message" {...props.Formik.getFieldProps("message")}/>
            </p>
            <button type="submit">{props.t("ourItems.Send")}</button>
        </form>
    )
}
export default MForm