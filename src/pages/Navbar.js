import './Navbar.css'
import Profileimg from './profileimg.jpg'
import { useNavigate } from "react-router-dom"
function Navbar()
{
    const navigate = useNavigate();
 
    const HomeMain = () => {
        navigate("/home");
    }
    const AboutPage = () => {
        navigate("/about");
    }
    const ProfilePage = () => {
        navigate("/profile");
    }
    return(
        <>
        <div className="Navi">
            <h1 style={{float: 'left'}} className='logo'>Blogify</h1>
            <p style={{float: 'left'}} className='Navbartag' onClick={HomeMain}>Home</p>
            <p style={{float: 'left'}} className='Navbartag'onClick={AboutPage}>About</p>
            <p style={{float: 'left'}} className='Navbartag'onClick={ProfilePage}>Profile</p>
            <img src={Profileimg} alt="" style={{float: 'right'}} className='Profimg'/>
        </div>
        </>
    );
}
export default Navbar;