import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PopUpSlider.scss";
import CardProject from "../cardProject/CardProject";

function PopUpSlider({data}) {
  let settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",

    draggable: false,
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {data.map((obj, index) => (
          <CardProject key={obj.id.toString()} obj={obj} />
        ))}
      </Slider>
    </div>
  );
}

export default PopUpSlider;
