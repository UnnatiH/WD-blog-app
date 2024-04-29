import profimg from './profileimg.jpg'
import './Profile.css'
import post6 from './postimg6.jpg'
import post7 from './postimg7.jpg'
import post5 from './postimg5.jpg'
import Navbar from './Navbar'
function Profile()
{
    return(
        <>
        <Navbar/>
    <div className="ProfileBack">
     <div className="ProfileBox">
        <div className="topsect">
        <img src={profimg} alt="" className='Profimg1'/>
        <div className='userdetails'><h2 style={{marginBottom:"-10px",marginLeft:'5px'}} >Full Name</h2> <h4 style={{marginLeft:'5px',fontWeight:'lighter'}}>@username</h4></div>
        </div>
     </div>
    <center><h1 style={{color:"pink"}}>Your Posts</h1></center> 
     <div className="Postback">
            <div className="Postbox">
                <img src={post5} alt='cityimg' className="Postimg"/>
                <h4 className="Postheading">Spaghetti with Crispy Zucchini</h4>
                <p className="Postbody">This Spaghetti with Crispy Zucchini is the perfect end-of-summer song! It doesn’t get much better than fresh summer zucchini coated in a crispy, cheesy breading piled high on top of spaghetti with fresh herbs. YUM! <a href="https://pinchofyum.com/spaghetti-with-crispy-zucchini">read more</a></p>
            </div>
            <div className="Postbox">
                <img src={post6} alt='cityimg' className="Postimg"/>
                <h4 className="Postheading">Basic Soft Pretzels</h4>
                <p className="Postbody">Basic Soft Pretzels – necessary dippers for your beer cheese soup ♡ Soft, excessively fluffy, basic, and delicious. These are the BEST<a href="https://pinchofyum.com/basic-soft-pretzels">read more</a></p>
            </div>
            <div className="Postbox">
                <img src={post7} alt='cityimg' className="Postimg"/>
                <h4 className="Postheading">5 Ingredient Tomato Soup</h4>
                <p className="Postbody">A simple 5 ingredient tomato soup made with butter, onion, and canned San Marzano tomatoes. Based on the Marcella Hazan tomato sauce recipe. This hits the cozy vibes just right. <a href="https://pinchofyum.com/5-ingredient-tomato-soup">read more</a></p>
            </div>
            </div>
    </div></>);
}
export default Profile