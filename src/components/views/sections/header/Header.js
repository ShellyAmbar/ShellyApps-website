import React from "react";
import "./Header.css";
import Typed from "react-typed";
import Particles from "react-particles-js";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="Header" className="header-wraper">
      <div className="main-info">
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                },
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 8,
                  color: "rgb(255, 24, 243)",
                },
              },
            },
          }}
        />
        <h1>Web and Mobile Apps development</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Design",
            "React web applications",
            "Android apps",
            "IOS Apps",
            "React Native Apps",
            "Node js server",
            "MongoDB",
            "SQL",
            "Firebase",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link
          activeClass="active"
          to="ContactMe"
          spy={true}
          smooth={true}
          duration={300}
          className="btn-main-offer"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Header;
