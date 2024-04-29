import './About.css'
import Navbar from './Navbar';
function About()
{
return(
    <>
   
    <Navbar/>
    <div className="AboutBack">
        <div className="AboutBox">
        <center><h1 style={{fontSize:'50px', color:"pink",fontFamily:"Jacquard 12 Charted",borderColor:"palevioletred"}}>About</h1></center>
        <p style={{color:"white",padding:"20px"}}>My name is Unnati Hassanandani and this blog is a part of my Assignment for my Web Dev class<br/>the site is a blog app and it’s fully responsive!</p>
        </div>
    </div>

    </>
);
}
export default About