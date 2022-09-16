import React from "react";

const Tags = ({ tags }) => (
  <div className="project-tags-container">
    {tags
      ? tags.map((tag, i) => (
          <div
            className="project-tags"
            style={{ backgroundColor: tag[1], boxShadow: `0 0 6px ${tag[1]}` }}
            key={`${i}`}
          >
            <p>{tag[0]}</p>
          </div>
        ))
      : "Loading..."}
  </div>
);

export default Tags;
