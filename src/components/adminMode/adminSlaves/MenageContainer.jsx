import { useFormik } from "formik";
import { notify } from "../../Footer/footer"
import Script from "../script"
import s from "../style.module.scss"
import * as yup from "yup"
import Menage from "./Menage";
function MenageContainer(props) {
    const Formik = useFormik({
        initialValues: {
            title: "",
            date: "",
            message: ""
        },
        onSubmit: (values, { resetForm }) => Script.Ord(notify, values, props.t, resetForm)
    }),
        Formik2 = useFormik({
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
                id: yup.number().integer().required()
            })
        })
    return (
        <div className={s.AdminPanel} >
        <Menage Script={Script} s={s} t={props.t} notify={notify} Formik={Formik} Formik2={Formik2}/>
        </div>
    )
}
export default MenageContainer;