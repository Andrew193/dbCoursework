function ChangeVis(props) {
    return(
        <>
        <h2 onClick={(e) => props.Script.show(e, props.s, props.notify, props.t)}>{props.t("admin.showByName")}</h2>
            <section>
                <input type="text" />
                <button onClick={(e) =>props.Script.ChangeVis(props.notify,e.target.previousSibling.value,props.t) }>{props.t("changeVis")}</button>
            </section>
        </>
    )
}
export default ChangeVis;
