const { v4: uuidv4 } = require('uuid');

function OptMaker(props) {
    return(<>{props.toMake.map((value)=><option key={uuidv4()} value={value.Name} >
    {value.Name}
</option>)}</>)
}
export default OptMaker;