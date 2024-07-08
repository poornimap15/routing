import { useNavigate } from "react-router-dom";


const AboutUs = () => {


    let navigate = useNavigate();


    let clickHandlerCEO = () => {
        console.log("clicked CEO");
        navigate('/ceo');
    }
    let clickHandlerCFO = () => {
        console.log("clicked CFO");
        navigate('/cfo');
    }


    return (
        <div>
            <h1> About Us !!</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus accusamus iure at consequatur rerum ducimus accusantium magnam voluptatem illo sed, nobis, temporibus asperiores,
                harum optio. Quod placeat impedit est maiores!</p>
                <button onClick={clickHandlerCEO}> CEO </button> <br/>
                <button onClick={clickHandlerCFO}> CFO </button>


        </div>
     );
}
 
export default AboutUs;
