import React from "react";

import "./Projects.css";
import { data } from "./data";
import PopUpSlider from "../../customs/PopUpSlider/PopUpSlider";
import GridLIst from "../../customs/gridList/GridLIst";

const Projects = () => {
  const handleClickCard = (obj) => {};
  return (
    <div id="Projects" className="projects-container">
      <div className="grid-view">
        <GridLIst
          data={data}
          title={"Projects"}
          handleClickCard={handleClickCard}
        />
      </div>

      <div className="slider-view">
        <PopUpSlider
          data={data}
          sliderTitle={"Projects"}
          handleClickCard={handleClickCard}
          className="slider"
        />
      </div>
    </div>
  );
};

export default Projects;
