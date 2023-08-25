
import "./Footer.scss"
import { FaLocationArrow, FaMobileAlt,FaEnvelope } from "react-icons/fa";
import payments from "../../assets/payments.png"


 const Footer = () => {
    
    return <div className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolor error accusamus a, provident ea modi obcaecati rerum, 
                aperiam, expedita veritatis tempora optio saepe magni aut. Magni illo eius dolore autem.</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow/>
                    <div className="text">04 c MPV app ooty road chnadni chowk manali 400015.</div>
                </div>
                <div className="c-item">
                    <FaMobileAlt/>
                    <div className="text">Phone no:+91 80971228199</div>
                </div>
                <div className="c-item">
                    <FaEnvelope/>
                    <div className="text">04 c MPV app ooty road chnadni chowk manali 400015.</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Headphone</span>
                <span className="text">Smartwatch</span>
                <span className="text">Bluetoothspeaker</span>
                <span className="text">Wirelessearbud</span>
                <span className="text">Hometheater</span>
                <span className="text">Projecters</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact us</span>
            </div>
            

            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">Khandare store 2022 created by Khandare brothers & sons PVT LTD.</div>
                    <img src={payments} alt="#" />
                </div>
                
            </div>


        
    </div>
 }
 export default Footer;