
function Emails(props) {
    let items=props.values.map((value)=><li><a href={`tel:${value}`}>{value}</a></li>)
    console.log(items);
    return(<ul>
        {items}
        </ul>
    )
}
export default Emails