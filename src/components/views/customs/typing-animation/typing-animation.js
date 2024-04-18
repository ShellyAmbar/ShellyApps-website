import React from "react";
import {TypeAnimation} from "react-type-animation";
import "./typing-animation.css";

const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "React",
        1000,
        "React Native",
        1000,
        "Android",
        1000,
        "IOS",
        1000,
        "Typescript",
        1000,
        "Redux",
        1000,
        "Mobx",
        1000,
      ]}
      style={{color: "#FFFF"}}
      wrapper="span"
      speed={50}
      className="text"
      repeat={Infinity}
    />
  );
};

export default TypingAnimation;
