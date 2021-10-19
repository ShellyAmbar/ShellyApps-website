import React from "react";

import "./Projects.css";
import { data } from "./data";
import PopUpSlider from "../../customs/PopUpSlider/PopUpSlider";
import GridLIst from "../../customs/gridList/GridLIst";

const Projects = () => {
  const handleClickCard = (obj) => {};
  return (
    <div id="Projects" className="projects-container">
      <h1 className="slide-in from-top">Projects</h1>
      <div className="grid-view">
        <GridLIst
          data={data}
        
          handleClickCard={handleClickCard}
        />
      </div>

      <div className="slider-view">
        <PopUpSlider
          data={data}
          
          handleClickCard={handleClickCard}
          className="slider"
        />
      </div>
    </div>
  );
};

export default Projects;
