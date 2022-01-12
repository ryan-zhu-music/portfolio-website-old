import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";
import { BsFillStarFill } from 'react-icons/bs';

const AudioPlayer = ({tracks}) => {
  // State
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { title, source, starred } = tracks;

  // Refs
  const audioRef = useRef(new Audio(source));
  const intervalRef = useRef();

  const { duration } = audioRef.current;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #c3d3dd), color-stop(${currentPercentage}, #3e4e82))
  `;

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (!audioRef.current.ended) {
        setTrackProgress(audioRef.current.currentTime);
      } else {
        setIsPlaying(false);
        setTrackProgress(0);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
      setIsPlaying(false);
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
      <div className="music__audio-player-container">
        <div className={isPlaying ? "music__audio-player-active" : "music__audio-player"}>
            <div className="music__track">
                <div className="music__title">
                  <h4>{title}</h4>
                  {
                    starred ? 
                    <BsFillStarFill size={"15px"}/> : 
                    null
                  }
                </div>
                <div className="music__play">
                  <AudioControls
                      isPlaying={isPlaying}
                      onPlayPauseClick={setIsPlaying}
                  />
                  <input
                      type="range"
                      value={trackProgress}
                      step="1"
                      min="0"
                      max={duration ? duration : `${duration}`}
                      className="music__progress"
                      onChange={(e) => onScrub(e.target.value)}
                      onMouseUp={onScrubEnd}
                      onKeyUp={onScrubEnd}
                      style={{ background: trackStyling }}
                  />
                </div>
                <hr/>
            </div>
        </div>
    </div>
  );
};

export default AudioPlayer;
