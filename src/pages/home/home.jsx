import React from "react";
import "./home.css";
import OnlyImage from "../../components/only-image";
import ProductsHome from "../../components/products-home";
import FollowUs from "../../components/follow-us";
import Banner from "../../components/banner/banner";
import HomeMisionSection from "../../components/home-mision-section/home-mision-section";
import HowItWork from "../../components/how-it-work/how-it-work";

function Home() {
  const imageHome1 =
    "https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2019/06/27112110/RFB-2006-1-pandeleche.jpg";

  return (
    <div className="container-home">
      <Banner />
      <HomeMisionSection />
      <OnlyImage image={imageHome1} />
      <ProductsHome />
      <HowItWork />
      <FollowUs />
    </div>
  );
}

export default Home;
