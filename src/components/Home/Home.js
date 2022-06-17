import React from "react";
import Cards from "./Cards";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="allCards">
        <Cards img={`https://pngimg.com/uploads/donut/donut_PNG50.png`} />
        <Cards
          img={`https://www.downloadclipart.net/large/donuts-png-pic.png`}
        />
        <Cards img={`https://pngimg.com/uploads/donut/donut_PNG6.png`} />
      </div>
    </div>
  );
};

export default Home;
