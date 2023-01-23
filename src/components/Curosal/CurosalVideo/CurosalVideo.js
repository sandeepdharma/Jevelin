import "./CurosalVideo.scss";
import React, { useState } from "react";
import { PlayCircleFilled } from "@ant-design/icons";

const CurosalVideo = () => {
  const [showVideo, setShowVideo] = useState(false);
  const changeFunctionality = () => {
    setShowVideo(true);
  };
  return (
    <div className="CurosalVideo-container">
      <div className="video-image">
        {showVideo === false ? (
          <PlayCircleFilled
            className="play-button"
            onClick={changeFunctionality}
          />
        ) : null}

        {showVideo === true ? (
          <iframe
            title="Jevelin theme-Getting started"
            width="620"
            height="400"
            src="https://www.youtube.com/embed/wQX8_nwylTY?autoplay=1&mute=1controls=0"
          ></iframe>
        ) : null}
      </div>
    </div>
  );
};

export default CurosalVideo;
