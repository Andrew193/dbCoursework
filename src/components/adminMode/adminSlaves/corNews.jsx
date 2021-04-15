

function CorNews(props) {
    return (
        <form onSubmit={props.Formik2.handleSubmit}>
            <h2>{props.t("admin.Form.title")}</h2>
            <p>
                <h2>{props.t("admin.Form.field1")}</h2>
                <input type="text" name="title" id="title" {...props.Formik2.getFieldProps("title")} />
            </p>
            <p>
                <h2>{props.t("admin.Form.field2")}</h2>
                <input type="text" name="date" id="date" {...props.Formik2.getFieldProps("date")} />
            </p>
            <p>
                <h2>{props.t("admin.Form.field3")}</h2>
                <textarea type="text" name="message" id="message" {...props.Formik2.getFieldProps("message")} />
            </p>
            <input type="number" name="id"  id="id" {...props.Formik2.getFieldProps("id")} />
            <button type="submit">{props.t("ourItems.Send")}</button>
        </form>
    )
}
export default CorNews;