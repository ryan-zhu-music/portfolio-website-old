import { useState, useEffect } from "react";

import { Navigation } from "./navigation";
import { Header } from "./music/header";
import { Playlist } from "./music/playlist";
import { Footer } from "./Footer";

import music_data from "../data/music_data.js";
import SmoothScroll from "smooth-scroll";
import "./../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Music = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(music_data);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-quart",
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={data.Header} />
      <Playlist data={data.Soundtracks} />
      <Playlist data={data.Piano} />
      <Playlist data={data.Ensemble} />
      <Footer />
    </div>
  );
};

export default Music;