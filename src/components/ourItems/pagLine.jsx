import Script from "./forms/sendOrder"

function PagLine(props) {
    return (
        <div>{props.page}<input type="number" style={{ margin: "0px 15px" }} max={`${Script.ToRound(props.data.data2.Size) - 1}`} onBlur={(e) => props.setPage(e.target.value)} ></input>{Script.ToRound(props.data.data2.Size) - 1}</div>
    )
}
export default PagLine;