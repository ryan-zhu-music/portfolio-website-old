import { useState, useEffect } from "react";
import { Navigation } from "./home/navigation";
import { Header } from "./home/header";
import { About } from "./home/about";
import { Music } from "./home/music";
import { Contact } from "./home/contact";
import { Footer } from "./home/footer";
import HomeData from "../data/home_data.json";
import SmoothScroll from "smooth-scroll";
import "./../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Home = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(HomeData);
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
      <About data={data.About} />
      <Music data={data.Music} />
      <Contact data={data.Contact} />
      <Footer data={data.Footer} />
    </div>
  );
};

export default Home;
