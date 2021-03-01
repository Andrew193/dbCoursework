import './App.css';
import "./translete.js"
import { useTranslation } from "react-i18next";
import { useFormik } from 'formik';
import Valid from "./formValidator"
import Errors from "./errorMessages"
import MainContent from "./components/MainContent/MainContent"
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import Form from "./components/RegAndLog/regAndLog"
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
function App() {
  const { t, i18n } = useTranslation();
  const colorMode = useSelector((state) => state.colorMode.mode)
  const langMode = useSelector((state) => state.lgMode.mode)
  const notify = () => toast("Операция успешна!");
  const Formik = useFormik({
    initialValues: {
      name: "",
      password: ""
    },
    validate: (values) => {
      let errors = {}
      if (Valid.validName(values.name)) errors.name = Errors.nameError
      if (!Valid.validPassword(values.password)) errors.password = Errors.passwordError
      return errors
    },
    onSubmit: (values, { resetForm }) => {
      localStorage.setItem("user", JSON.stringify({ Name: values.name, Flag: true }))
      notify()
      resetForm()
      window.location.reload();
    }
  })
  const logIn = useState(JSON.parse(localStorage.getItem("user"))?.Flag || false)[0]
  useEffect(() => {
    i18n.changeLanguage(langMode)
  }, [i18n,langMode])
  return (
    <div className={!colorMode ? "App" : "App NightMode"}>
      {logIn ? <MainContent t={t} colorMode={colorMode} NightMode={"NightMode"} /> : <Form t={t} Formik={Formik} />}
      <ToastContainer toastStyle={{ background: "black", borderRadius: "15px" }} hideProgressBar={true} autoClose={2000}
        position="top-center" />
      
    </div>
  );
}

export default App;
