import React, { useEffect } from "react";
import ScrollAnimations from "../../customs/ScrollAnimations";
import "./About.css";
import logo from "../../../../images/me.jpg";

const About = () => {
  useEffect(() => {
    ScrollAnimations();
  }, []);

  return (
    <div id="About" className="about-container">
      <div className="about-body">
        <img alt="" src={logo} className="img-circular slide-in from-left" />
        <div className="content">
          <h1 className="fade-in ">About me</h1>
          <p className="slide-in from-right">
            Hey! i'm Shelly Ambar, a Software developer from Ramat Gan.
          </p>
          <p className="slide-in from-left">
            I Graduated BS.c in Computer Science from HIT - Holon Institute Of
            Thechnology.
          </p>
          <p className="slide-in from-right">
            I have over 50 projects in my Github with veroius technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
