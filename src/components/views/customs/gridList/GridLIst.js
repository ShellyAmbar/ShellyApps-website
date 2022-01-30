import React from "react";
import CardProject from "../cardProject/CardProject";

import "./GridList.scss";

const GridLIst = ({ data, handleClickCard }) => {

  return (
    <div className="grid-container ">
      <div className="grid-content">
        {data.map((obj, index) => (
          <div
            style={{ animationDelay: `${index * 50}ms` }}
            key={index}
            className="item fade-in"
          >
            <CardProject obj={obj} onCliclCard={handleClickCard} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridLIst;
