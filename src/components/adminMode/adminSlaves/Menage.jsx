import CreateNewsContainer from "./createNewsContainer";
import ShowPersonContainer from "./showPersonContainer";
import ShowByName from "./showByName"
import ChangeNewsContainer from "./changeNewsContainer";
import ChangeVis from "./changeVis";
function Menage(props) {
    return (
        <div className={props.s.AdminPanel} >
            <CreateNewsContainer Script={props.Script} s={props.s} Formik={props.Formik} t={props.t} notify={props.notify} />
            <ShowPersonContainer Script={props.Script} s={props.s} notify={props.notify} t={props.t} />
            <ShowByName Script={props.Script} s={props.s} notify={props.notify} t={props.t}/> 
            <ChangeNewsContainer Script={props.Script} s={props.s} Formik2={props.Formik2} t={props.t} notify={props.notify} />
            <ChangeVis Script={props.Script} s={props.s} notify={props.notify} t={props.t}/>
        </div>
    )
}
export default Menage;