import React from "react";
import { BsSkipBackwardFill, BsSkipForwardFill, BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick
}) => (
  <div className="site-music__audio-controls">
    <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={onPrevClick}
    >
      <BsSkipBackwardFill size={32}/>
    </button>
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
    <button
      type="button"
      className="next"
      aria-label="Next"
      onClick={onNextClick}
    >
      <BsSkipForwardFill size={32}/>
    </button>
  </div>
);

export default AudioControls;
