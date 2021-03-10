const { v4: uuidv4 } = require('uuid');

function OptMaker(props) {
    const items=props.toMake.map((value)=><option key={uuidv4()} value={value.Name} >
        {value.Name}
    </option>)
    return(<>{items}</>)
}
export default OptMaker;