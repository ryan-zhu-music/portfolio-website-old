import React from "react";
import AboutImage from "../../assets/images/About Image.png";
import "../../styles/index.css";

const About = () => {
  return (
    <article id="about">
      <picture>
        <img src={AboutImage} alt="Ryan Zhu.png" className="about-image" />
      </picture>
      <div className="about-description">
        <h2>About Me</h2>
        <p>
          I am a Toronto high school student with a keen interest in computer
          science.
        </p>
        <p>
          I enjoy building websites and applications, and love learning new
          things!
        </p>
        <p>
          I also have a hobby in composing and music; I have experimented with
          many different styles of music, which are all available below.
        </p>
        <p>
          Want to support me?{" "}
          <a
            href="https://www.buymeacoffee.com/ryanzhu"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Buy me a coffee! ☕
          </a>
        </p>
        <a className="btn" href="projects">
          Portfolio
        </a>
      </div>
    </article>
  );
};

export default About;
