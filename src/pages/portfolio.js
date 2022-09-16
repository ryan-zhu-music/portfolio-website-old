import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import Project from "../components/portfolio/project";

import project_data from "../data/portfolio_data";
import PortfolioImage from "../assets/images/Portfolio.png";
import "../styles/portfolio.css";

const PortfolioPage = () => {
  return (
    <main id="portfolio-page">
      <Navbar />
      <header className="portfolio-header">
        <img src={PortfolioImage} alt="Ryan Zhu" className="header-image" />
        <h2>Portfolio</h2>
        <a
          className="btn"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </header>
      <section>
        <h2>Projects</h2>
        <div className="projects">
          {project_data.Projects.projects.map((project, index) => (
            <Project project={project} index={index} />
          ))}
        </div>
      </section>
      <iframe
        title="RZMusic Spotify"
        style={{
          width: `${75}vw`,
          opacity: 0.6,
          border: "10px solid #f2faf9",
          marginTop: 50,
        }}
        src="https://open.spotify.com/embed/artist/6QRbpevuWFtC1Eoy58bGVW?utm_source=generator"
        width="100%"
        height="260"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
      <Footer />
    </main>
  );
};

export default PortfolioPage;
