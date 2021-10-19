import React, { useEffect } from "react";
import ScrollAnimations from "../../customs/ScrollAnimations";
import "./About.css";
import logo from "../../../../images/me.jpg";

const About = () => {
  useEffect(() => {
  return ScrollAnimations();
  },[]);

  return (
    <div id="About" className="about-container">
      <div className="about-body">
        <h1 className="slide-in from-top">About me</h1>

        <img alt="" src={logo} className="img-circular fade-in " />

        <p className="slide-in">
          Welcome to my site! I'm Shelly Ambar, a Software developer from Ramat
          Gan, Israel.
        </p>
        <p className="slide-in">
          I Graduated BS.c in Computer Science from HIT - Holon Institute of
          Thechnology and for the last 2 years I worked in the industry as a
          mobile app developer (Android and IOS).
        </p>
        <p className="slide-in">
          I have over 50 projects in my Github page with various types of
          technologies.
        </p>
        <p className="slide-in">
          I'm hard-working and always looking to learn new technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
