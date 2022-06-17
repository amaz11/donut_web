import React from "react";
import banner from "../../assets/img/donut-banner.png";
import "./banner.css";

const Slider = () => {
  return (
    <div className="main-banner">
      <div className="main-banner_text slideInRight">
        <h1>Try Different Taste From Other</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam odit
          deserunt quasi maiores minus ratione!
        </p>
        <button className="button_one">Commande</button>
        <button className="button_two">Let's Eat</button>
      </div>
      <div className="main-banner_img slideInLeft">
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default Slider;
