import * as React from "react";

import "../styles/global.css";
import "../styles/index.css";

import Hero from "../components/home/hero";
import About from "../components/home/about";
import Music from "../components/home/music";
import Contact from "../components/home/contact";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const IndexPage = () => {
  return (
    <main id="home-page">
      <Navbar />
      <Hero />
      <About />
      <Music />
      <Contact />
      <Footer />
    </main>
  );
};

export default IndexPage;
