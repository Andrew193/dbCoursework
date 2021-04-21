import { useState } from "react";
import AllPerson from "./allPerson"
function ShowByName(props) {
    const [flag, setFlag] = useState(false);
    return(
        <>
        <h2 onClick={(e) => props.Script.show(e, props.s, props.notify, props.t)}>{props.t("admin.showByName")}</h2>
            <section>
                <input type="text" id="name" /><button onClick={() => setFlag(!flag)}>{props.t("search")}</button>
                {flag && <AllPerson name={document.getElementById("name").value} t={props.t} />}
            </section>
        </>
    )
}
export default ShowByName;