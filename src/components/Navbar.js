import React from "react";
import "./Navbar.css";
import flag from "../components/Navbar-icons/flag.svg";
import notification from "../components/Navbar-icons/notification.svg";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav_wrapper">
        
        <input type="search" name="search" placeholder="Search" className="search_bar" />
        
        
        
        <div className="nav_right_items">
            <div className="flag">
            <img src={flag} alt="flag" />
            <p>England</p>
            </div>
            <div className="bell">
            <img src={notification} alt="notification" />
                </div> 
            </div>
        </div>
      </div>
    
  );
};

export default Navbar;
