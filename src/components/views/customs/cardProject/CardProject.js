import React, { useRef, useState } from "react";
import "./CardProject.scss";
import ReactPlayer from "react-player/youtube";

const CardProject = ({ obj, onCliclCard }) => {
  const refVideo = useRef(null);
  const [isPlaying, setisPlaying] = useState(false);
  return (
    <div className="card-wrapper-slider">
      <div className="card-slider">
        <div className="card-image-slider">
          <ReactPlayer
            ref={refVideo}
            width="100%"
            height="100%"
            className="video-player"
            url={obj.youtubeLink}
            playing={isPlaying}
          />
        </div>
        <ul className="social-icons-slider">
          <li>
            <a href={obj.youtubeLink}>
              <i class="fab fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href={obj.gitLink}>
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
          <h2>{obj.title}</h2>
          <p>{obj.description}</p>
          <a
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
