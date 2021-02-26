import './App.css'; 
import "./translete.js"
import Nav from "./components/Navigation/Nav"
import MainPage from "./components/MainPage/MainPage"
import Footer from "./components/Footer/footer"
import { useTranslation } from "react-i18next";
import { Route } from "react-router"
function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" render={()=> <MainPage />}/>
      <Footer />
    </div>
  );
}

export default App;
