import React, {useEffect} from "react";

import "./Projects.css";
import {data} from "./data";
import PopUpSlider from "../../customs/PopUpSlider/PopUpSlider";
import GridLIst from "../../customs/gridList/GridLIst";
import ScrollAnimations from "../../customs/ScrollAnimations";

const Projects = () => {
  useEffect(() => {
    ScrollAnimations();
  }, []);

  return (
    <div id="Projects" className="projects-container">
      <h1 className="slide-in from-top">Projects</h1>
      <div className="grid-view">
        <GridLIst data={data} />
      </div>

      <div className="slider-view">
        <PopUpSlider data={data} className="slider" />
      </div>
    </div>
  );
};

export default Projects;
