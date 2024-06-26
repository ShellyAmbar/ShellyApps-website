import React, {useEffect} from "react";
import "./Timeline.css";
import {timeLineElements} from "./database";
import ScrollAnimations from "../../customs/ScrollAnimations";

const Timeline = () => {
  useEffect(() => {
    ScrollAnimations();
  }, []);
  return (
    <div id="Timeline" className="timeline-container">
      <h1 className="slide-in from-top">Timeline</h1>
      <div className="timeline-body">
        <ul>
          {timeLineElements.map((item, index) => (
            <li
              key={index?.toString()}
              id={index}
              className="timeline-item slide-in"
            >
              <h2 className="date fade-in">{item.date}</h2>
              <h1 className="fade-in">{item.title}</h1>
              <p className="fade-in">{item.company}</p>
              <p className="fade-in">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
