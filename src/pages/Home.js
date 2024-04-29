import './Home.css'
import { useNavigate } from "react-router-dom"
function Home()
{
    const navigate = useNavigate();
 
    const LoginPage = () => {
        navigate("/login");
    }
    const SignPage = () => {
        navigate("/signup");
    }
    return(
         <div className="backg">
        <div className="typewriter">
        <h1>Blogify</h1>
        <div className="buttons"> <button id="b1" onClick={LoginPage}>Login</button> <button id="b2" onClick={SignPage}>Sign Up</button></div> 
           
        </div> </div>
    );
}
export default Home;
