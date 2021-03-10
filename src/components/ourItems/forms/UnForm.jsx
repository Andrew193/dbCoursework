import s from "../style.module.css"
import { useFormik } from 'formik';
import {notify} from "../../Footer/footer"
import Script from "./sendOrder"
function UnForm(props) {
    const Formik = useFormik({
        initialValues: {
          ItemName: "",
          itemCount: 0,
          ad:"",
          date:"",
          person:""
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            Script.Ord(notify,values,props.t,resetForm,"/makeUnOrder")
      }})
    return(
        <div className={props.colorMode? s.Container+" "+props.NightMode:s.Container}>
            <form onSubmit={Formik.handleSubmit}>
                <p>
                    <h2>{props.t("ourItems.Form1C")}</h2>
                    <input type="text" name="ItemName" id="ItemName" {...Formik.getFieldProps("ItemName")}>
                    </input>
                </p>
                <p>
                    <h2>{props.t("ourItems.Form2C")}</h2>
                    <input type="number" name={"itemCount"} {...Formik.getFieldProps("itemCount")} id={"itemCount"}
                     min={1} max={100} />
                </p>
                <p>
                    <h2 style={{ width: 100 + "%" }}>{props.t("ourItems.Form3C")}</h2>
                </p>
                <p>
                    <h2>{props.t("ourItems.Form4P")}</h2>
                    <input type="text" name={"ad"} {...Formik.getFieldProps("ad")}  id={"ad"}/>
                </p>
                <p>
                    <h2>{props.t("ourItems.Form5P")}</h2>
                    <input type="text" name={"date"} {...Formik.getFieldProps("date")} id={"date"} />
                </p>
                <p>
                    <h2>{props.t("ourItems.Form51P")}</h2>
                    <input type="text" {...Formik.getFieldProps("person")} name={"person"} id={"person"}/>
                </p>
                <button type="submit">{props.t("ourItems.Send")}</button>
            </form>
        </div>
    )
}
export default UnForm;