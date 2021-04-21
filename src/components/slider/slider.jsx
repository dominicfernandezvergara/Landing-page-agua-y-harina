import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import styles from "./slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ejemplo de como importar una imagen para usarla en html
// import image from "../../images/images-slider/foto-pampitas.jpeg";

// Github : https://github.com/akiran/react-slick
// Slick carousel API : https://react-slick.neostack.com/docs/api/#centerPadding

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  };
  // ejemplo de como importar una imagen para usarla en html
  // const sliderItem = <img className="slider-img" src={image} alt="" />;
  const openNewWindow = (event) => {
    event.preventDefault();
    window.open("https://www.w3schools.com");
  };

  const firstImage = (
    <img
      className={styles.sliderImg}
      src="https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2019/06/27112110/RFB-2006-1-pandeleche.jpg
          "
      alt=""
    />
  );

  const secondImage = (
    <div className={styles.containerFollowUsSlider}>
      <h1 className={styles.followUstextSlider}>Follow Us!</h1>
      <div className={styles.containerFollowUsLink}>
        <Link
          className={styles.followUsLinkSlider}
          to="https://www.instagram.com/factorynine/"
          onClick={openNewWindow}
        >
          @InstagramName
        </Link>
      </div>
    </div>
  );

  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {firstImage}
        {secondImage}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
