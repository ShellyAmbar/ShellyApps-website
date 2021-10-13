import React, { useState } from "react";
import "./CardProject.scss";
import ReactPlayer from "react-player/youtube";

const CardProject = ({ obj, onCliclCard }) => {
  const [isPlaying, setisPlaying] = useState(false);
  return (
    <div className="card-wrapper-slider">
      <div className="card-slider">
        <div className="card-image-slider">
          <ReactPlayer
            width="100%"
            height="100%"
            className="video-player"
            url={obj.youtubeLink}
            playing={isPlaying}
            onPause={() => {
              setisPlaying(false);
            }}
            onPlay={() => {
              setisPlaying(true);
            }}
          />
        </div>
        <ul className="social-icons-slider">
          <li>
            <button
              className="icon-btn"
              onClick={() => window.open(obj.youtubeLink, "_blank")}
            >
              <i class="fab fa-youtube"></i>
            </button>
          </li>
          <li>
            <button
              className="icon-btn"
              onClick={() => window.open(obj.gitLink, "_blank")}
            >
              <i class="fab fa-github"></i>
            </button>
          </li>
          <li>
            <button
              className="icon-btn"
              onClick={() => window.open(obj.siteLink, "_blank")}
            >
              <i class="fab fa-staylinked"></i>
            </button>
          </li>
        </ul>

        <div className="details-slider">
          <h2>{obj.title}</h2>
          <p>{obj.description}</p>
          <button
            className="play-btn"
            onClick={() =>
              isPlaying ? setisPlaying(false) : setisPlaying(true)
            }
          >
            {isPlaying ? (
              <i class="far fa-stop-circle fa-4x"></i>
            ) : (
              <i class="far fa-play-circle fa-4x"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
