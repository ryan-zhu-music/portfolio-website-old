import React from "react";
import { Link } from "react-router-dom";
import AudioPlayer from "../music/AudioPlayer";
import { tracks, players } from "../../data/tracks";
import "../../styles/index.css";

const Music = () => {
  return (
    <section id="music">
      <header className="music-header">
        <h2>Music</h2>
        <p>
          Browse through my library of original compositions and arrangements,
          spanning various styles including Classicism, Romanticism,
          Impressionism, and Modernism.
        </p>
        <Link className="btn" to="/music">
          Browse
        </Link>
      </header>
      <div className="music-highlights">
        {tracks.map((track, index) => (
          <AudioPlayer
            tracks={track}
            category={players[index].title}
            key={String(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Music;
