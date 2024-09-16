import React, {useRef, useEffect, useState} from "react";
import "./Header.css";

import {Link} from "react-scroll";
import {gsap} from "gsap";

import {ScrollTrigger} from "gsap/ScrollTrigger";
import video from "../../../../videos/2.mp4";
import logo from "../../../../images/me.jpg";
import TypingAnimation from "../../customs/typing-animation/typing-animation";
import sound from "../../../../sounds/1.mp3";
import useSound from "use-sound";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVolumeUp, faVolumeMute} from "@fortawesome/free-solid-svg-icons";
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const ref = useRef(null);

  const [play, {stop}] = useSound(sound, {volume: 1, interrupt: true});
  const [isPlayingSound, setisPlayingSound] = useState(false);
  useEffect(() => {
    if (ref?.current !== null) {
      ref?.current?.play();
    }
  }, []);

  return (
    <div id="Header" className="header-wraper">
      <video
        id="myVideo"
        className="video"
        autoPlay={true}
        playsInline={true}
        loop
        muted
        ref={ref}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="main-info">
        <div className="content">
          <h2 className="title">Hi! I'm Shelly!</h2>
          <h1>A mobile apps and fullStack developer</h1>
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
          <TypingAnimation />
        </div>
        <img alt="" src={logo} className="img-circular fade-in " />
      </div>
      <button
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          zIndex: 2,
          backgroundColor: "transparent",
        }}
        onClick={() => {
          setisPlayingSound(!isPlayingSound);
          if (isPlayingSound) {
            stop();
          } else {
            play();
          }
        }}
      >
        <FontAwesomeIcon
          icon={isPlayingSound ? faVolumeUp : faVolumeMute}
          style={{color: "white"}}
        />
      </button>
    </div>
  );
};

export default Header;
