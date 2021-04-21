import { useState } from "react";
import AllPerson from "./allPerson"
function ShowPersonContainer(props) {
    const [flag, setFlag] = useState(false)
    return(<>
        <h2 onClick={(e) => props.Script.show(e, props.s, props.notify, props.t)}>{props.t("admin.showAllPerson")}</h2>
            <section>
                <button onClick={() => setFlag(!flag)}>{props.t("admin.showAllPerson")}</button>
                {flag && <AllPerson t={props.t} queryMod={true} />}
            </section>
    </>)
}
export default ShowPersonContainer;