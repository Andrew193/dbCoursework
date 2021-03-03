import Map from "./map"
import PhoneList from "./phoneList"
import EmailList from "./emailList"
import AddressList from "./AddressList"
import s from "./style.module.css"
function Contact(props) {
    return(
        <div className={props.colorMode? s.Container+" "+props.NightMode:s.Container} >
            <h1>{props.t("contacts.mapTitle")}</h1>
            <Map t={props.t} s={s}/>
            <h2>{props.t("contacts.howToContactUs")}</h2>
            <section className={s.Contacts} >
                <PhoneList t={props.t} />
                <EmailList t={props.t} />
                <AddressList t={props.t} />
            </section>
        </div>
    )
}
export default Contact