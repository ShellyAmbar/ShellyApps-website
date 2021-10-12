import React, { useEffect } from "react";
import "./Timeline.css";
import { timeLineElements } from "./database";
import ScrollAnimations from "../../customs/ScrollAnimations";

const Timeline = () => {
  useEffect(() => {
    ScrollAnimations();
  }, []);

  return (
    <div id="Timeline" className="timeline-container">
      <div className="timeline-body">
        <ul>
          {timeLineElements.map((item, index) => (
            <li id={index} className="slide-in">
              <h2 className="date">{item.date}</h2>
              <h1 className="fade-in">{item.title}</h1>
              <p className="fade-in">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
