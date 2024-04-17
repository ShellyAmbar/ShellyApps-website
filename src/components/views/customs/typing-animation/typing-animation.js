import React from "react";
import {TypeAnimation} from "react-type-animation";

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
      wrapper="span"
      speed={50}
      style={{fontSize: "3em", display: "inline-block", color: "white"}}
      repeat={Infinity}
    />
  );
};

export default TypingAnimation;
