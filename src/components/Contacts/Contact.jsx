import Map from "./map"
import PhoneList from "./phoneList"
import EmailList from "./emailList"
import AddressList from "./AddressList"
import s from "./style.module.scss"
import SmallNavbar from "../Navigation/primeNavbar"
function Contact(props) {
    return(
        <div className={props.colorMode? s.Container+" "+props.NightMode:s.Container} >
            <SmallNavbar t={props.t} to1="#contacts" to2="#map"/>
            <h1>{props.t("contacts.mapTitle")}</h1>
            <div id="map" style={{textAlign:"left"}}><Map t={props.t} s={s}/></div>
            <h2>{props.t("contacts.howToContactUs")}</h2>
            <section className={s.Contacts} id="contacts" >
                <PhoneList t={props.t} />
                <EmailList t={props.t} />
                <AddressList t={props.t} />
            </section>
        </div>
    )
}
export default Contact