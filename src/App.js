import './App.scss';
import "./translete.js"
import { useTranslation } from "react-i18next";
import { useFormik } from 'formik';
import Script from "./script/logRegPerson"
import MainContent from "./components/MainContent/MainContent"
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import Form from "./components/RegAndLog/regAndLog"
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
function App() {
  const { t, i18n } = useTranslation(),
  colorMode = useSelector((state) => state.colorMode.mode),
  langMode = useSelector((state) => state.lgMode.mode),
  notify = () => toast(t("ok")),
  Formik = useFormik({
    initialValues: {
      name: "",
      password: ""
    },
    validate:(values)=>Script.validate(values),
    onSubmit:(values, { resetForm })=>Script.submit(values,notify,resetForm)
  })
  const logIn = useState(JSON.parse(localStorage.getItem("user"))?.Flag || false)[0]
  useEffect(() => {
    i18n.changeLanguage(langMode)
  }, [i18n, langMode])
  return (
    <div className={!colorMode ? "App" : "App NightMode"}>
      {logIn ? <MainContent t={t} colorMode={colorMode} notify={notify} NightMode={"NightMode"} /> : <Form t={t} Formik={Formik} />}
      <ToastContainer toastStyle={{ background: "black", borderRadius: "15px" }} hideProgressBar={true} autoClose={2000}
        position="top-center" />
    </div>
  );
}

export default App;
