import React from 'react';
import myntraLogo from './imgs/myntraLogo.png';
import {IoPersonCircleOutline} from '@react-icons/all-files/io5/IoPersonCircleOutline'
import { IoBag } from '@react-icons/all-files/io5/IoBag'
import { GiFastArrow } from "@react-icons/all-files/gi/GiFastArrow";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { Link } from 'react-router-dom';

let Header = ({click, setClick})=>{
    return (
        <>
        <header>
        <div className="logo_container">
            <Link to="/"><img className="myntra_home" src={myntraLogo} alt="Myntra Home"/></Link>
        </div>
        <nav className="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>
        <div className="search_bar">
        <FaSearch/>
            
            <input className="search_input" placeholder="Search for products, brands and more"></input>
        </div>
        <div className="action_bar">
            <div className="action_container">
          <Link to="/profile"><IoPersonCircleOutline/></Link>
                <span className="action_name">Profile</span>
               
            </div>

            <div className="action_container">
               <Link to="/wishList"><GiFastArrow></GiFastArrow></Link>
                <span className="action_name">Wishlist</span>
            </div>

            <div className="action_container">
            <Link to="/Bag">  <IoBag></IoBag></Link>
              <span className="action_name" >Bag</span>
                <span className="bag-item-count">0</span>
                
            </div>
        </div>
    </header>
        </>
    )
}
export default Header;