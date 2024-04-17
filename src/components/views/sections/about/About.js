import React, {useEffect} from "react";
import "./About.css";

import ScrollAnimations from "../../customs/ScrollAnimations";

const About = () => {
  useEffect(() => {
    ScrollAnimations();
  }, []);
  return (
    <div id="About" className="about-container">
      <div className="about-body">
        <p className="about-section fade-in">
          Welcome! I'm Shelly Ambar, a Software developer from Ramat Gan,
          Israel.
        </p>
        <p className="about-section fade-in">
          I Graduated BS.c in Computer Science from HIT in 2019,
        </p>
        <p className="about-section  fade-in">
          For the last 3 years I have worked in the industry as a Mobile Apps
          developer with 3 main platforms:
        </p>

        <p className="about-section start fade-in">
          <br /> - Native Android with JAVA
          <br /> - Native IOS with Swift
          <br /> - React Native with typescript
        </p>

        <p className="about-section fade-in">
          I have over 60 projects in my Github page with various types of
          technologies.
        </p>
        <p className="about-section fade-in">
          I'm hard-working and always looking to learn new technologies.
        </p>
      </div>
    </div>
  );
};

export default About;
