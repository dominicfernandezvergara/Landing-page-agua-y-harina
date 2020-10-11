import React from "react";
import "./home.css";
import SimpleSlider from "../../components/slider/slider";
import OnlyImage from "../../components/only-image";
import OnlyText from "../../components/only-text";
import ProductsHome from "../../components/products-home";
import SocialNetworks from "../../components/social-networks/social-networks";
import FollowUs from "../../components/follow-us";

function Home() {
  const imageHome1 =
    "https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2019/06/27112110/RFB-2006-1-pandeleche.jpg";
  const textHome1 = "HORNEAMOS PENSANDO EN TU BIENESTAR";
  return (
    <div className="container-home">
      <SimpleSlider />
      <OnlyText text={textHome1} />
      <OnlyImage image={imageHome1} />
      <ProductsHome />
      <FollowUs />
      <SocialNetworks />
    </div>
  );
}

export default Home;
