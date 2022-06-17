import React from "react";
import donutLogo from "../assets/img/donut-logo.png";

const Navbar = () => {
  return (
    <div className="main-navbar">
      <div className="main-navbar_logo">
        {/* <h4>Logo</h4> */}
        <img src={donutLogo} alt="logo" />
      </div>
      <div className="main-navbar_list">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Restaurant</a>
          </li>
          <li>
            <a href="">Shopping</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
