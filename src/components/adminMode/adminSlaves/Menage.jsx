import { useFormik } from "formik";
import { useState } from "react";
import { notify } from "../../Footer/footer"
import Script from "../script"
import s from "../style.module.scss"
import AllPerson from "./allPerson"
import CorNews from "./corNews";
import MForm from "./menageForm"
import * as yup from "yup"
function MakeNews(props) {
    const [flag, setFlag] = useState(false), [flag2, setFlag2] = useState(false),
        Formik = useFormik({
            initialValues: {
                title: "",
                date: "",
                message: ""
            },
            onSubmit: (values, { resetForm }) => Script.Ord(notify, values, props.t, resetForm)
        }), Formik2 = useFormik({
            initialValues: {
                title: "",
                date: "",
                message: "",
                id: 0
            },
            onSubmit: (values, { resetForm }) => Script.OrdCor(notify, values, props.t, resetForm),
            validationSchema: yup.object({
                    title: yup.string()
                        .min(5)
                        .required('Required'),
                    date: yup.string()
                        .min(7)
                        .required('Required'),
                    message: yup.string().required('Required'),
                    id:yup.number().integer().required()
                })
        })
    return (
        <div className={s.AdminPanel} >
            <h2 onClick={(e) => Script.show(e, s, notify, props.t)}>{props.t("admin.createNews")}</h2>
            <section>
                <MForm t={props.t} Formik={Formik} />
            </section>
            <h2 onClick={(e) => Script.show(e, s, notify, props.t)}>{props.t("admin.showAllPerson")}</h2>
            <section>
                <button onClick={() => setFlag(!flag)}>{props.t("admin.showAllPerson")}</button>
                {flag && <AllPerson t={props.t} queryMod={true} />}
            </section>
            <h2 onClick={(e) => Script.show(e, s, notify, props.t)}>{props.t("admin.showByName")}</h2>
            <section>
                <input type="text" id="name" /><button onClick={() => setFlag2(!flag2)}>{props.t("search")}</button>
                {flag2 && <AllPerson name={document.getElementById("name").value} t={props.t} />}
            </section>
            <h2 onClick={(e) => Script.show(e, s, notify, props.t)}>{props.t("admin.changeNews")}</h2>
            <section>
                <CorNews Formik2={Formik2} t={props.t} />
            </section>
        </div>
    )
}
export default MakeNews;