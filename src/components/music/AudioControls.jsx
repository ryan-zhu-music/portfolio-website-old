import React from "react";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
}) => (
  <div className="music__audio-controls">
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <BsFillPauseFill size={32}/>
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <BsFillPlayFill size={32}/>
      </button>
    )}
  </div>
);

export default AudioControls;
