import React from "react";
import Slider from "react-slick";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//ejemplo de como importar una imagen para usarla en html
// import image from "../../images/images-slider/foto-pampitas.jpeg";

//Github : https://github.com/akiran/react-slick
//Slick carousel API : https://react-slick.neostack.com/docs/api/#centerPadding

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
  //ejemplo de como importar una imagen para usarla en html
  // const sliderItem = <img className="slider-img" src={image} alt="" />;

  const sliderItem2 = (
    <img
      className="slider-img"
      src="https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2019/06/27112110/RFB-2006-1-pandeleche.jpg
          "
      alt=""
    />
  );

  return (
    <div className="slider">
      <Slider {...settings}>
        {sliderItem2}
        {sliderItem2}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
