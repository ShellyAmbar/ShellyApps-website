import React from "react";
import "./CardProject.scss";

const CardProject = ({ obj, onCliclCard }) => {
  return (
    <div className="card-wrapper-slider">
      <div className="card-slider">
        <div className="card-image-slider">
          <img src={obj.image} />
        </div>
        <ul className="social-icons-slider">
          <li>
            <a href="#">
              <i class="fab fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-staylinked"></i>
            </a>
          </li>
        </ul>

        <div className="details-slider">
          <h2>
            Vecation <span className="title-slider">Title</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
