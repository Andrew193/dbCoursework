import Items from "./Maker"

function PhoneList(props) {
    return(<>
        <h2>{props.t("contacts.phoneNumber")}</h2>
        <Items type={"phone"} values={["+3801111111111","+3802222222222","+3803333333333","+3804444444444","+3805555555555"]}/>
   </>)
}
export default PhoneList;