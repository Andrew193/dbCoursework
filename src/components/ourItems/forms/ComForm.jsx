import s from "../style.module.scss"
import { gql, useQuery } from "@apollo/client";
import OptMaker from "./optionMaker"
import Loader from "../../Loader/Loader"
import Page404 from "../../404Page/Page404"
import { useFormik } from 'formik';
import {notify} from "../../Footer/footer"
import Script from "./sendOrder"
function ComForm(props) {
    const { loading, error, data } = useQuery(gql`{
        data : getItems{
           Name
        }
      }`)
      const Formik = useFormik({
        initialValues: {
          ItemName: "",
          itemCount: 0,
          ad:"",
          date:"",
          person:""
        },
        onSubmit: (values, { resetForm }) => {
            Script.Ord(notify,values,props.t,resetForm,"/makeOrOrder")
      }})
    return (
        <div className={props.colorMode ? s.Container + " " + props.NightMode : s.Container}>
            {loading && <Loader />}
            {error && <Page404 />}
            {!loading && <form onSubmit={Formik.handleSubmit}>
                <p>
                    <h2>{props.t("ourItems.Form1C")}</h2>
                    <select name="ItemName" id="ItemName" {...Formik.getFieldProps("ItemName")}>
                        <optgroup>
                            <option value="none" hidden="true">{props.t("ourItems.Form1title")}</option>
                            <OptMaker toMake={data.data} />
                        </optgroup>
                    </select>
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
            }
        </div>
    )
}
export default ComForm;