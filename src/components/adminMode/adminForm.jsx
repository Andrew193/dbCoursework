function AdminForm(props) {

    return (
        <>
            <h1>{props.t("form.log")}</h1>
            <form method={"GET"} onSubmit={()=>{}}>
                <h2>{props.t("form.field1")}</h2>
                <input type="text" />
                <h2>{props.t("form.field2")}</h2>
                <input type="text" />
                <button type="submit">{props.t("form.log")}</button>
            </form>
        </>
    )
}
export default AdminForm