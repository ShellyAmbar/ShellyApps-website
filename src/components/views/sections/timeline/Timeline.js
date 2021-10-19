import React, { useEffect } from "react";
import "./Timeline.css";
import { timeLineElements } from "./database";
import ScrollAnimations from "../../customs/ScrollAnimations";

const Timeline = () => {
  useEffect(() => {
  return  ScrollAnimations();
  }, []);

  return (
    <div id="Timeline" className="timeline-container">
      <h1>Timeline</h1>
      <div className="timeline-body">
        <ul>
          {timeLineElements.map((item, index) => (
            <li id={index} className="timeline-item slide-in">
              <h2 className="date fade-in">{item.date}</h2>
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
