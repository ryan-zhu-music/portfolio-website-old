import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import "../../styles/music.css";

const PlaylistControls = ({ isPlaying, onPlayPauseClick }) => {
  return (
    <div className="audio-controls">
      {isPlaying ? (
        <button
          type="button"
          onClick={() => onPlayPauseClick(false)}
          aria-label="Pause"
        >
          <FontAwesomeIcon icon={faPause} size="1x" style={{ fontSize: 15 }} />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => onPlayPauseClick(true)}
          aria-label="Play"
        >
          <FontAwesomeIcon icon={faPlay} size="1x" style={{ fontSize: 15 }} />
        </button>
      )}
    </div>
  );
};

export default PlaylistControls;
