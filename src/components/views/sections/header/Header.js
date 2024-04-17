import React from "react";
import "./Header.css";

import {Link} from "react-scroll";
import {gsap} from "gsap";

import {ScrollTrigger} from "gsap/ScrollTrigger";
import video from "../../../../videos/1.mp4";
import logo from "../../../../images/me.jpg";
import TypingAnimation from "../../customs/typing-animation/typing-animation";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  return (
    <div id="Header" className="header-wraper">
      <video className="video" src={video} autoPlay loop muted />
      <div className="main-info">
        <div className="content">
          <h2 className="title">Hi! I'm Shelly!</h2>
          <h1>A Mobile Apps and web developer</h1>
          <TypingAnimation />

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
        <img alt="" src={logo} className="img-circular fade-in " />
      </div>
    </div>
  );
};

export default Header;
