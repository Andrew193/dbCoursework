import Items from "./Maker"

function AddressList(props) {
    return (<>
        <h2>{props.t("contacts.address")}</h2>
        <Items type={"other"} values={["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"]} />
    </>)
}

export default AddressList