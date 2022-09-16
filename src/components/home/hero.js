import React from "react";
import { socials } from "../../data/home";
import HeroImage from "../../assets/images/Ryan Zhu.png";
import "../../styles/index.css";

const Hero = () => {
  return (
    <header id="hero">
      <img src={HeroImage} alt="Ryan Zhu" className="header-image" />
      <h1>Ryan Zhu</h1>
      <p>Full-Stack Developer & Contemporary Composer</p>
      <ul className="socials">
        {socials.map((social) => (
          <li key={social.name}>
            <a href={social.link} target="_blank" rel="noopener noreferrer">
              {social.component}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Hero;
