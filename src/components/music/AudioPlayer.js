import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "../../styles/music.css";

const AudioPlayer = ({ tracks, category }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { title, album, image, source } = tracks[trackIndex];

  const audioRef = useRef(new Audio(source));
  const intervalRef = useRef();
  const isReady = useRef(false);

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
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
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

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
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
    audioRef.current.pause();

    audioRef.current = new Audio(source);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      setIsPlaying(false);
    } else {
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  const { width } = useWindowDimensions();
  return (
    <div className="audio-player-container">
      <div className={isPlaying ? "audio-player-active" : "audio-player"}>
        <div className="track-info">
          <h3>{category}</h3>
          <div className="track-image-container">
            <img
              className="track-image"
              src={image}
              alt={`Track artwork for ${title} by ${album}`}
            />
          </div>
          <h2 className="track-title">{title}</h2>
          <h3 className="track-album">{album}</h3>
          <input
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max={duration ? duration : `${duration}`}
            className="track-progress"
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
            style={{ background: trackStyling }}
          />
          <AudioControls
            isPlaying={isPlaying}
            onPrevClick={toPrevTrack}
            onNextClick={toNextTrack}
            onPlayPauseClick={setIsPlaying}
            width={width}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
