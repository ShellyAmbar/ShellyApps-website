import React, { useEffect } from "react";
import "./Technologies.css";
import data from "./data";
import Bubble from "../../customs/bubble/Bubble";
import ScrollAnimations from "../../customs/ScrollAnimations";

const Technologies = () => {
  useEffect(() => {
    ScrollAnimations();
  }, []);
  const evenList = () => {
    let list = data.filter((obj, index) => index % 2 === 0);
    console.log("list", list);
    return list;
  };
  const oddList = () => {
    let list = data.filter((obj, index) => index % 2 === 1);
    return list;
  };
  return (
    <div id="Technologies" className="technologies-container">
      <h1>Technologies</h1>
      <div className="technologies-body">
        <div className="list">
          {evenList().map((obj, index) => {
            let top = Math.floor(Math.random() * 20);
            return (
              <div
                className="bubble fade-in"
                style={{
                  top: `${top}px`,
                  left: `${index}px`,
                  transitionDelay: `${index * 500}ms`,
                }}
              >
                <Bubble key={index} text={obj.name} />
              </div>
            );
          })}
        </div>
        <div className="list">
          {oddList().map((obj, index) => {
            let top = Math.floor(Math.random() * 20);
            return (
              <div
                className="bubble fade-in"
                style={{
                  top: `${top}px`,
                  left: `${index}px`,
                  transitionDelay: `${(oddList().length - index - 1) * 500}ms`,
                }}
              >
                <Bubble key={index} text={obj.name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
