const { v4: uuidv4 } = require('uuid');
function Items(props) {
    return(<ul>
        {props.values.map((value)=><li key={uuidv4()}>{props.type==="phone"?<a href={`tel:${value}`}>🕿{value}</a>:
    props.type==="email"?<a href={`mailto:${value}`}>🖂{value}</a>:<>🏠{value}</>}</li>)}
        </ul>
    )
}
export default Items