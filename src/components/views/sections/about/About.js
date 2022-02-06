import React, { useEffect } from "react";
import "./About.css";
import logo from "../../../../images/me.jpg";
import ScrollAnimations from "../../customs/ScrollAnimations";

const About = () => {
  useEffect(() => {
    ScrollAnimations();
   }, []);
  return (
    <div id="About" className="about-container">
      <div className="about-body">
        <h1 className="slide-in from-top">About me</h1>

        <img alt="" src={logo} className="img-circular fade-in " />

        <p className="slide-in">
          Welcome! I'm Shelly Ambar, a Software developer from Ramat
          Gan, Israel.
        </p>
        <p className="slide-in">
          I Graduated BS.c in Computer Science from HIT in 2019,
        </p>
        <p className="slide-in">
         and for the last 2 years I worked in the industry as a  mobile apps developer  (Android with Java and IOS with Swift)
        </p>
       
        <p className="slide-in">
        and as a freelancer Fullstack developer with React - React Native - node JS.
        </p>
        <p className="slide-in">
          I have over 60 projects in my Github page with various types of
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
