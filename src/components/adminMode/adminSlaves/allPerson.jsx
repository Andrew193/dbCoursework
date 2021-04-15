import { gql, useQuery } from "@apollo/client";
import Page404 from '../../404Page/Page404'
import Loader from "../../Loader/Loader"
import MakePersons from "./makePersons"
function AllPerson(props) { 
    const name=(props.name||""),queryMod=(props.queryMod||false),{ loading, error, data } = useQuery(gql`{
        data : getAllPerson (name:"${name}",queryMod:${queryMod}){
            FullName
            Password
        }
      }
    `)
    return(<>
        {error && <Page404/>}
        {loading && <Loader />}
        {!loading && <MakePersons t={props.t} toMake={data.data} />}
    </>)
}
export default AllPerson;