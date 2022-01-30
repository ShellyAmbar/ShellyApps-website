import React from "react";
import "./Technologies.css";
import data from "./data";
import Bubble from "../../customs/bubble/Bubble";


const Technologies = () => {
 
  const firstList = () => {
    let list = data.filter(
      (obj, index) => index >= 0 && index < data.length / 3
    );
    console.log("list", list);
    return list;
  };
  const secList = () => {
    let list = data.filter(
      (obj, index) => index >= data.length / 3 && index < (data.length / 3) * 2
    );
    return list;
  };
  const thierdList = () => {
    let list = data.filter(
      (obj, index) => index >= (data.length / 3) * 2 && index < data.length
    );
    return list;
  };

  return (
    <div id="Technologies" className="technologies-container">
      <h1 className="slide-in from-top">Technologies</h1>

      <div className="technologies-body">
        <div className="list">
          {firstList().map((obj, index) => {
            let top = Math.floor(Math.random() * 15);
            return (
              <div
                className="bubble fade-in"
                style={{
                  top: `${2 * top}px`,
                  transitionDelay: `${index * 500}ms`,
                }}
              >
                <Bubble key={index} text={obj.name} />
              </div>
            );
          })}
        </div>

        <div className="list">
          {secList().map((obj, index) => {
            let top = Math.floor(Math.random() * 15);
            return (
              <div
                className="bubble fade-in"
                style={{
                  top: `${2 * top}px`,
                  transitionDelay: `${(secList().length - index - 1) * 500}ms`,
                }}
              >
                <Bubble key={index} text={obj.name} />
              </div>
            );
          })}
        </div>
        <div className="list">
          {thierdList().map((obj, index) => {
            let top = Math.floor(Math.random() * 15);
            return (
              <div
                className="bubble fade-in"
                style={{
                  top: `${2 * top}px`,
                  transitionDelay: `${index * 500}ms`,
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
