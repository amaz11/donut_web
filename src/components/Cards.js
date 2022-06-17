import React from "react";

const Cards = ({ img }) => {
  return (
    <div className="card zoomIn">
      <div className="card-product">
        <div className="card-product_img">
          <img src={img} alt="donut-product" />
        </div>
        <div className="card-dot_btn">
          <a href="">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </a>
        </div>
      </div>
      <div>
        <h3>PEXELS-TIMA MIROSHHICHENKO</h3>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus illo
          ratione obcaecati rem qui reiciendis ipsa provident soluta saepe quod!
        </p>
      </div>
    </div>
  );
};

export default Cards;
