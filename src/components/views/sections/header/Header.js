import React, {useRef, useEffect} from "react";
import "./Header.css";

import {Link} from "react-scroll";
import {gsap} from "gsap";

import {ScrollTrigger} from "gsap/ScrollTrigger";
import video from "../../../../videos/1.mp4";
import logo from "../../../../images/me.jpg";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const ref = useRef(null);
  useEffect(() => {}, []);

  return (
    <div id="Header" className="header-wraper">
      <video className="video" src={video} autoPlay loop muted />
      <div className="main-info">
        <img alt="" src={logo} className="img-circular fade-in " />
        <h2 className="title">Shelly Ambar</h2>
        <h1>Mobile Apps and web developer</h1>

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
