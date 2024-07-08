import { Link } from "react-router-dom";


const Employees = () => {
   
    // we could get info from server/middleware and display a table with details..
    // each row can be clickable
    //on clicking each row, that particular user info can be displayed using another comp
    // the information can be sent from here using '/ ../'
    //it can be read in the other component using useParams
    return (
    <>
    <ol>
        <li> <Link to='/employee/10/sp'> Jane Doe </Link></li>
        <li> <Link to="/employee/12/np"> John Doe </Link></li>
        <li> <Link to="/employee/13/jp"> Joe Doe </Link></li>
    </ol>


    </> );
}
 
export default Employees;
