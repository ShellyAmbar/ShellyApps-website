import React, { useEffect } from "react";
import CardProject from "../cardProject/CardProject";
import ScrollAnimations from "../ScrollAnimations";
import "./GridList.scss";

const GridLIst = ({ data, title, handleClickCard }) => {
  useEffect(() => {
    ScrollAnimations();
  }, []);

  return (
    <div className="grid-container ">
      <h1>{title}</h1>
      <div className="grid-content">
        {data.map((obj, index) => (
          <div className="fade-in">
            <CardProject key={index} obj={obj} onCliclCard={handleClickCard} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridLIst;
