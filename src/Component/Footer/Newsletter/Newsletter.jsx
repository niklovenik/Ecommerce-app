import React from "react";
import "./Newsletter.scss"
import {FaFacebook,FaLinkedinIn,FaTwitterSquare,FaInstagram } from "react-icons/fa";

const Newsletter = () => {
    
    return <div className="newsletter-section">
        <div className="newsletter-content">
            \<span className="small-text">News letter</span>
            <span className="big-text">sign up for latest update & offers</span>
            <div className="form">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
            </div>
            <div className="text">will be used in accordnace with our policy</div>
            <div className="social-icons">
                <div className="icon">
                    <FaFacebook size={14}/>
                </div>
                <div className="icon">
                    <FaLinkedinIn size={14}/>
                </div>
                <div className="icon">
                    <FaTwitterSquare size={14}/>
                </div>
                <div className="icon">
                    <FaInstagram size={14}/>
                </div>
            </div>
     </div>
    </div>


};

export default Newsletter;