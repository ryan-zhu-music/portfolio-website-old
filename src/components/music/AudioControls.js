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
    <button type="button" aria-label="Previous" onClick={onPrevClick}>
      <FontAwesomeIcon
        icon={faBackwardStep}
        size="2x"
        style={{ fontSize: 25 }}
      />
    </button>
    {isPlaying ? (
      <button
        type="button"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <FontAwesomeIcon icon={faPause} size="2x" style={{ fontSize: 25 }} />
      </button>
    ) : (
      <button
        type="button"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <FontAwesomeIcon icon={faPlay} size="2x" style={{ fontSize: 25 }} />
      </button>
    )}
    <button type="button" aria-label="Next" onClick={onNextClick}>
      <FontAwesomeIcon
        icon={faForwardStep}
        size="2x"
        style={{ fontSize: 25 }}
      />
    </button>
  </div>
);

export default AudioControls;
