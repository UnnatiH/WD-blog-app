import Navbar from "./Navbar";
import './Homepage.css'
import post1 from './postimg1.webp'
import post2 from './postimg2.webp'
import post3 from './postimg3.webp'
import post4 from './postimg4.jpg'
function Homepage()
{
    return(
        <>
        <Navbar/>
        <div className="Homepageback">
            
            <center><h1 style={{fontSize:'50px', color:"pink",fontFamily:"Jacquard 12 Charted",borderColor:"palevioletred"}}>Home</h1></center>
            <div className="Postback">
            <div className="Postbox">
                <img src={post2} alt='cityimg' className="Postimg"/>
                <h4 className="Postheading">A 13-Step Guide To Getting Your Funds Right In 2024</h4>
                <p className="Postbody">Year-end. That term has different meanings for different people. For a financial advisor, my main goal at year-end is to make sure everyone crushes their New Year $$$ To-Do List. My advice is to get moving on the below checklist today and make sure it’s wrapped up before your year-end.  <a href="https://girlboss.com/blogs/read/a-13-step-guide-to-getting-your-funds-right-in-2024">read more</a></p>
            </div>
            <div className="Postbox">
                <img src={post3} alt='cityimg' className="Postimg"/>
                <h4 className="Postheading">This 90-30-50 Macro Method May Be Worth Trying</h4>
                <p className="Postbody">TikTok has been the birthplace of many diet trends, from the fasting-focused 5:2 diet to the whole food-based Valencia diet. One of the latest to go viral is the 90-30-50 method, which is essentially a form of macro tracking    <a href="https://blog.myfitnesspal.com/what-is-90-30-50-method/">read more</a></p>
            </div>
            <div className="Postbox">
                <img src={post4} alt='cityimg' className="Postimg"/>
                <h4 className="Postheading">Innovative educators share their vision for better classrooms</h4>
                <p className="Postbody">If you’ve ever had a conversation with an impassioned educator, you know that they are overflowing with brilliant, resourceful, innovative, and – in all likelihood – extremely under-circulated ideas  <a href="https://blog.ed.ted.com/2022/07/21/4-innovative-educators-share-their-visions-for-creating-better-classrooms/">read more</a></p>
            </div>
            <div className="Postbox">
                <img src={post1} alt='cityimg' className="Postimg"/>
                <h4 className="Postheading">Ideas for Stunning City Photography</h4>
                <p className="Postbody">Towns and cities may be noisy, busy, stressful, and congested – yet they provide amazing opportunities for photos. You can capture gorgeous skyline shots, amazing snaps featuring architectural landmarks, images of passersby dwarfed by giant skyscrapers, and so much more.</p>
            </div>
            <div className="Postbox">
                <img src={post1} alt='cityimg' className="Postimg"/>
                <h4 className="Postheading">Ideas for Stunning City Photography</h4>
                <p className="Postbody">Towns and cities may be noisy, busy, stressful, and congested – yet they provide amazing opportunities for photos. You can capture gorgeous skyline shots, amazing snaps featuring architectural landmarks, images of passersby dwarfed by giant skyscrapers, and so much more.</p>
            </div>
            <div className="Postbox">
                <img src={post1} alt='cityimg' className="Postimg"/>
                <h4 className="Postheading">Ideas for Stunning City Photography</h4>
                <p className="Postbody">Towns and cities may be noisy, busy, stressful, and congested – yet they provide amazing opportunities for photos. You can capture gorgeous skyline shots, amazing snaps featuring architectural landmarks, images of passersby dwarfed by giant skyscrapers, and so much more.</p>
            </div>
            <div className="Postbox">
                <img src={post1} alt='cityimg' className="Postimg"/>
                <h4 className="Postheading">Ideas for Stunning City Photography</h4>
                <p className="Postbody">Towns and cities may be noisy, busy, stressful, and congested – yet they provide amazing opportunities for photos. You can capture gorgeous skyline shots, amazing snaps featuring architectural landmarks, images of passersby dwarfed by giant skyscrapers, and so much more.</p>
            </div>
            <div className="Postbox">
                <img src={post1} alt='cityimg' className="Postimg"/>
                <h4 className="Postheading">Ideas for Stunning City Photography</h4>
                <p className="Postbody">Towns and cities may be noisy, busy, stressful, and congested – yet they provide amazing opportunities for photos. You can capture gorgeous skyline shots, amazing snaps featuring architectural landmarks, images of passersby dwarfed by giant skyscrapers, and so much more.</p>
            </div>

            </div>
        </div>
        </>
    );
}
export default Homepage;