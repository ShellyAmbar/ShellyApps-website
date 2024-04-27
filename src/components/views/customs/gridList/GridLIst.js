import React from "react";
import CardProject from "../cardProject/CardProject";

import "./GridList.scss";

const GridLIst = ({data}) => {
  return (
    <div className="grid-container ">
      <div className="grid-content">
        {data.map((obj, index) => (
          <div
            style={{animationDelay: `${index * 50}ms`}}
            key={index?.toString()}
            className="item fade-in"
          >
            <CardProject obj={obj} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridLIst;
