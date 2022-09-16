import React from "react";
import Navbar from "../components/navbar";
import Category from "../components/music/Category";
import Footer from "../components/footer";

import "../styles/index.css";
import "../styles/music.css";

import music_data from "../data/playlists";
import MusicImage from "../assets/images/RZMusic Logo.png";

const MusicPage = () => {
  return (
    <main id="music-page">
      <Navbar />
      <header id="music-header">
        <img src={MusicImage} alt="RZMusic Logo" className="header-image" />
        <h2>Music</h2>
        <p style={{ marginBottom: 10 }}>
          My library of compositions and arrangements.
        </p>
        <p>
          Want to support me?{" "}
          <a
            href="https://www.buymeacoffee.com/ryanzhu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy me a coffee! ☕
          </a>
        </p>
        <a
          className="btn"
          href="https://musescore.com/ryan_zhu_music"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sheet Music
        </a>
      </header>
      <Category data={music_data.Soundtracks} />
      <Category data={music_data.Piano} />
      <Category data={music_data.Ensemble} />
      <Footer />
    </main>
  );
};

export default MusicPage;
