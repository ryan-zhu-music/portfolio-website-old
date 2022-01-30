import { useState, useEffect } from "react";

import { Navigation } from "./Navigation";
import { Header } from "./about/header";
import { Body } from "./about/body";
import { Footer } from "./Footer";

import AboutData from "../data/about_data.json";
import SmoothScroll from "smooth-scroll";
import "./../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const About = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(AboutData);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
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
      <Header data={data.Header}/>
      <Body data={data.Body} />
      <Footer />
    </div>
  );
};

export default About;