import Nav from "../Navigation/Nav"
import MainPage from "../MainPage/MainPage"
import Footer from "../Footer/footer"
import Page404 from "../404Page/Page404"
import News from "../News/News"
import Contact from "../Contacts/Contact"
import About from "../About/About"
import LogAdmin from "../adminMode/logAdmin"
import SuperModePage from "../adminMode/superModePage"
import { Route } from "react-router"
import OurItems from "../ourItems/ourItems"
import SelectedNews from "../News/selectedNews"
import ComForm from "../ourItems/forms/ComForm"
import UnForm from "../ourItems/forms/UnForm"
import Authors from "../Authors/Authors"
function MainContent(props) {
    return (
        <>
            <Nav t={props.t} colorMode={props.colorMode} NightMode={"NightMode"}/>
            <Route exact path="/" render={() => <MainPage t={props.t} colorMode={props.colorMode} NightMode={"NightMode"}/>} />
            <Route exact path="/news" render={() => <News t={props.t} colorMode={props.colorMode} NightMode={"NightMode"} />} />
            <Route exact path="/contact" render={() => <Contact t={props.t} colorMode={props.colorMode} NightMode={"NightMode"}/>} />
            <Route exact path="/about" render={() => <About t={props.t} colorMode={props.colorMode} NightMode={"NightMode"}/>} />
            <Route exact path="/test/rest/props/masket/supModePage" render={() => <SuperModePage t={props.t} colorMode={props.colorMode} NightMode={"NightMode"}/>} />
            <Route exact path="/404" render={()=><Page404 t={props.t} colorMode={props.colorMode} NightMode={"NightMode"}/>} />
            <Route exact path="/test/rest/props/masket/logAdmin" render={()=><LogAdmin t={props.t} colorMode={props.colorMode} NightMode={"NightMode"}/>} />
            <Route exact path="/ourItems" render={()=><OurItems t={props.t} colorMode={props.colorMode} NightMode={"NightMode"}/>} />
            <Route exact path="/news/*" render={()=><SelectedNews t={props.t} notify={props.notify} colorMode={props.colorMode} NightMode={"NightMode"}/>} />
            <Route exact path="/ourItems/regCom" render={()=><ComForm t={props.t} colorMode={props.colorMode} NightMode={"NightMode"}/>} />
            <Route exact path="/ourItems/regUn" render={()=><UnForm t={props.t} colorMode={props.colorMode} NightMode={"NightMode"}/>} />
            <Route exact path="/ourItems/authors" render={()=><Authors t={props.t} colorMode={props.colorMode} NightMode={"NightMode"}/>} />
            <Footer t={props.t} colorMode={props.colorMode} NightMode={"NightMode"}/>
        </>
    )
}
export default MainContent;