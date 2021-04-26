import { useState } from "react";
import Script from "./forms/sendOrder"

function PagLine(props) {
    const maxSize=Script.ToRound(props.data.data2.Size),
    [inputValue,setInputValue]=useState(1)
    return (
        <div>{props.page}<input value={inputValue} type="number" style={{ margin: "0px 15px" }} onInput={(e)=>Script.confirmInput(e.target.value,maxSize,setInputValue)} onBlur={(e) => props.setPage(e.target.value)} />{maxSize}</div>
    )
}
export default PagLine;