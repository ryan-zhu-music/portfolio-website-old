import React, { useState, useEffect, useRef } from "react";
import PlaylistControls from "./PlaylistControls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../../styles/music.css";

const PlaylistPlayer = ({ tracks }) => {
  // State
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { title, source, starred } = tracks;

  // Refs
  const audioRef = useRef(
    typeof window !== "undefined" ? new Audio(source) : null
  );
  const intervalRef = useRef();

  const { duration } = audioRef.current;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #eee), color-stop(${currentPercentage}, #7777))
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
    <div className="music-player-container">
      <div className={isPlaying ? "music-player-active" : "music-player"}>
        <div className="track">
          <div className="title">
            <h4>{title}</h4>
            {starred ? (
              <FontAwesomeIcon
                icon={faStar}
                size="1x"
                style={{ fontSize: 15 }}
              />
            ) : null}
          </div>
          <div className="play">
            <PlaylistControls
              isPlaying={isPlaying}
              onPlayPauseClick={setIsPlaying}
            />
            <input
              type="range"
              value={trackProgress}
              step="1"
              min="0"
              max={duration ? duration : `${duration}`}
              className="progress"
              onChange={(e) => onScrub(e.target.value)}
              onMouseUp={onScrubEnd}
              onKeyUp={onScrubEnd}
              style={{ background: trackStyling }}
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default PlaylistPlayer;
