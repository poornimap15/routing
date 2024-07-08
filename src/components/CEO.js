import { useNavigate } from "react-router-dom";




const CEO = () => {
    let navigate = useNavigate();


    let clickHandler = () => {
        navigate(-1); // takes us to the previous page
    }


    return (
        <>
        <h2 className="bg-warning"> Welcome to CEO page</h2>
        <button onClick={clickHandler}> Back</button>
        </>
     );
}
 
export default CEO;
