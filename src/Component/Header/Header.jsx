import { useEffect, useState, useContext, useCallback } from "react";
// import { useNavigate } from "react-router-dom";

import {BsFillSearchHeartFill} from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import {BsFillHeartFill} from "react-icons/bs";

// import Search from '../Search/Search';
// import Cart from "../Cart/Cart";
// import {Context} from "../../utils/context";


import "./Header.scss"

const Header = () => {

    const [scrolled , setScrolled]=useState(false);

    const handleScroll = ()=> {
        const offset = window.scrollY;
        if (offset > 200){
            setScrolled(true);

        } else{
            setScrolled(false);
        }
    };

    useEffect (() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    
    return (
    <header className={`main-header ${scrolled ? 'sticky-header': ''}`}>
        <div className="header-content">
            <ul className="left">
                <li>Home</li>
                <li>About</li>
                <li>Category</li>
            </ul>
            <div className="center">Khandare's Empire</div>
            <div className="right">
                <BsFillSearchHeartFill/>
                <BsFillHeartFill/>
                <span className="cart-icon">
                    <BsFillCartFill/>
                    <span>5</span>
                </span>
            </div>
        </div>
    </header>

    )


};

export default Header;