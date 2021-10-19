import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PopUpSlider.scss";
import CardProject from "../cardProject/CardProject";

function PopUpSlider({ data, handleClickCard }) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {data.map((obj, index) => (
          <CardProject key={index} obj={obj} onCliclCard={handleClickCard} />
        ))}
      </Slider>
    </div>
  );
}

export default PopUpSlider;
