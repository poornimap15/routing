import { useParams } from "react-router-dom";


const Employee = () => {
    let paramObj = useParams();


    //url can be - http://localhost:3000/employee/13/jp
    //  <Route path="employee/:id/:name" element={<Employee/>} />
    //it can be read in the other component using useParams


    return (
        <>
        <h1> Employee Details</h1>
        <h3> Id is {paramObj.id }</h3>
        <h3> Name is: {paramObj.name} </h3>
        <h3> Sal is:....</h3>
        <h3> Dept is:....</h3>
        </>
     );
}
 
export default Employee;
