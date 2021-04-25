import React from "react";

import "./home.css";
import UseScrollToTop from "../../hooks/use-scroll-to-top";
import HomeProductsSection from "../../components/home-products-section";
import Banner from "../../components/banner/banner";
import HomeMisionSection from "../../components/home-mision-section/home-mision-section";
import HowItWork from "../../components/how-it-work/how-it-work";
import HomeEmpathyMessage from "../../components/home-empathy-message";

function Home() {
  UseScrollToTop();

  return (
    <div className="container-home">
      <Banner />
      <HomeMisionSection />
      <HomeEmpathyMessage />
      <HomeProductsSection />
      <HowItWork />
    </div>
  );
}

export default Home;
