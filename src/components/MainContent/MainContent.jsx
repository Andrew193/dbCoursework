import Nav from "../Navigation/Nav"
import MainPage from "../MainPage/MainPage"
import Footer from "../Footer/footer"
import News from "../News/News"
import Contact from "../Contacts/Contact"
import About from "../About/About"
import { Route } from "react-router"

function MainContent(props) {
    return (
        <>
            <Nav t={props.t} colorMode={props.colorMode} NightMode={"NightMode"}/>
            <Route exact path="/" render={() => <MainPage t={props.t} colorMode={props.colorMode} NightMode={"NightMode"}/>} />
            <Route exact path="/news" render={() => <News t={props.t} colorMode={props.colorMode} NightMode={"NightMode"} />} />
            <Route exact path="/contact" render={() => <Contact t={props.t} colorMode={props.colorMode} NightMode={"NightMode"}/>} />
            <Route exact path="/about" render={() => <About t={props.t} colorMode={props.colorMode} NightMode={"NightMode"}/>} />
            <Footer t={props.t} colorMode={props.colorMode} NightMode={"NightMode"}/>
        </>
    )
}
export default MainContent;