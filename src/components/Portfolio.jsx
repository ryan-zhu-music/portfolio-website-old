import { useState, useEffect } from "react";

import { Navigation } from "./Navigation";
import { Header } from "./portfolio/header";
import { About } from "./portfolio/about";
import { Projects } from "./portfolio/projects";
import { Footer } from "./Footer";

import PortfolioData from "../data/portfolio_data";
import SmoothScroll from "smooth-scroll";
import "./../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Portfolio = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(PortfolioData);
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
      {/*<About data={data.About} />*/}
      <Projects data={data.Projects} />
      <Footer />
    </div>
  );
};

export default Portfolio;