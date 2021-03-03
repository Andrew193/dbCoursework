import Items from "./Maker"

function EmailList(props) {
    return (<>
        <h2>{props.t("contacts.email")}</h2>
        <Items type={"email"} values={["example@gmail.com", "example2@gmail.com", "example3@gmail.com", "example4@gmail.com", "example5@gmail.com"]} />
    </>)
}
export default EmailList;