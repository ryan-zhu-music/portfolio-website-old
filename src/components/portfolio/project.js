import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Tags from "./tags";

const Project = ({ project, index }) => {
  const { width } = useWindowDimensions();

  return (
    <article
      className="project"
      key={`${project.name}-${index}`}
      style={{ flexDirection: index % 2 ? "row-reverse" : "row" }}
    >
      <hr className="project-divider" />
      <div
        className="project-description"
        data-aos={width >= 768 ? "fade-right" : "fade-up"}
      >
        <h3 className="project-name">{project.name}</h3>
        <h6>{project.date}</h6>
        <p>
          {project.description}{" "}
          {project.link2 && (
            <a
              href={project.link2[1]}
              className="link-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.link2[0] + "."}
            </a>
          )}
        </p>
        <Tags tags={project.tags} />
        {project.link && (
          <a
            href={project.link}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </a>
        )}
      </div>
      <picture
        data-aos="fade-left"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={project.image} className="project-image" alt="img.png" />
      </picture>
    </article>
  );
};

export default Project;
