import React, { useEffect } from "react";

import "./Bubble.css";

const Bubble = ({ text }) => {
  return <button className="bubble-container ">{text}</button>;
};

export default Bubble;
