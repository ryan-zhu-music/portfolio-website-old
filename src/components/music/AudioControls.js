import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faPause,
  faPlay,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/music.css";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
  width,
}) => (
  <div className="track-audio-controls">
    <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={onPrevClick}
    >
      <FontAwesomeIcon icon={faBackwardStep} size="2x" />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <FontAwesomeIcon icon={faPause} size="2x" />
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <FontAwesomeIcon icon={faPlay} size="2x" />
      </button>
    )}
    <button
      type="button"
      className="next"
      aria-label="Next"
      onClick={onNextClick}
    >
      <FontAwesomeIcon icon={faForwardStep} size="2x" />
    </button>
  </div>
);

export default AudioControls;
