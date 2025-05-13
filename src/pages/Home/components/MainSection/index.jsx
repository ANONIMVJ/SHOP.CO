import VectorImg from "../../../../assets/Vector.svg";
import { Button } from "../../../../components";
import BrandsAd from "../BrandsAdSection";

import "./Home.scss";

function Home() {
  return (
    <div className="hero">
      <div className="container hero-content">
        <div className="hero-text-section">
          <h2>
            <span>FIND CLOTHES</span>
            <span>THAT MATCHES</span>
            <span>YOUR STYLE</span>
          </h2>

          <div className="home-p-img">
            <p>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <img src={VectorImg} alt="Star decoration" />
          </div>

          <Button px={30}>Shop Now</Button>

          <div className="nomeric-wrapper">
            <div className="nomeric">
              <h3>200+</h3>
              <p>International Brands</p>
            </div>
            <div className="nomeric">
              <h3>2,000+</h3>
              <p>High-Quality Products</p>
            </div>
            <div className="nomeric">
              <h3>30,000+</h3>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>

        <img className="bigStarIcon" src={VectorImg} alt="Star decoration" />
      </div>

      <div>
        <BrandsAd />
      </div>
    </div>
  );
}

export default Home;
