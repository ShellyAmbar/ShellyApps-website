import React from "react";
import Data from "./data";
import "./libraries.css";
//import ItemLlibrary from "./item-library/item-library";
//import {animated, useSpring} from "react-spring";

const Libraries = () => {
  //   const style = useSpring({
  //     from: {
  //       transform: "rotateY(0deg)",
  //     },
  //     transform: "rotateY(25deg)",
  //   });
  return (
    <div id="Libraries" className="libraries-container">
      <h1 className="slide-in from-top">Libraries</h1>

      {Data.map((item) => {
        return (
          <div
            key={item.id}
            className="card"
            style={{
              //   ...style,
              backgroundImage: `url(${item.videoUrl})`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Libraries;
