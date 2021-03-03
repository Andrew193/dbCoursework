const { v4: uuidv4 } = require('uuid');
function Items(props) {
    const items=props.values.map((value)=><li key={uuidv4()}>{props.type==="phone"?<a href={`tel:${value}`}>{value}</a>:
    props.type==="email"?<a href={`mailto:${value}`}>{value}</a>:<>{value}</>}</li>)
    return(<ul>
        {items}
        </ul>
    )
}
export default Items