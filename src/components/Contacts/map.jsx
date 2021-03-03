

function Map(props) {
    return(
        <iframe className={props.s.Map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2284.8252680735827!2d36.250243167113084!3d49.99955485647611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0c20f418eb9%3A0xe197e8e66d55d259!2sKafedra%20Komp&#39;yuternoho%20Modelyuvannya%20Protsesiv%20Ta%20System%20Ntu%20%22Khpi%22!5e0!3m2!1sru!2sua!4v1614712197035!5m2!1sru!2sua" loading="lazy" title={`${props.t("contacts.mapTitle")}`}/>
    )
}
export default Map