import "./App.css";
import donutBgImg from "./assets/img/donut-bg.jpg";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  // const bgimg = {
  //   background: `url(${donutBgImg})`,
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };
  const bgimg = {
    backgroundColor: "#8d8d8f",
    opacity: 1,
    backgroundImage:
      "repeating-radial-gradient(circle at 0 0,transparent 0,#8d8d8f 10px),repeating-linear-gradient(#18191e55, #18191e)",
  };
  return (
    <div className="App" style={bgimg}>
      <div className="main-bg">
        <div className="main-bg_img">
          <img src={donutBgImg} alt="bgImage" />
        </div>
        <div className="main-container">
          <div className="container_fixed">
            <Navbar />
            <Slider />
            <div className="allCards">
              <Cards img={`https://pngimg.com/uploads/donut/donut_PNG50.png`} />
              <Cards
                img={`https://www.downloadclipart.net/large/donuts-png-pic.png`}
              />
              <Cards img={`https://pngimg.com/uploads/donut/donut_PNG6.png`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
