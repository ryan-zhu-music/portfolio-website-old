import React from "react";
import "../../styles/music.css";

import PlaylistPlayer from "./PlaylistPlayer";

const Category = (props) => {
  return (
    <section className="category">
      <hr />
      <div className="category-header">
        <h3>{props.data ? props.data.title : "Loading..."}</h3>
        <p>{props.data ? props.data.paragraph : "Loading..."}</p>
      </div>
      <div className="playlist-row">
        {props.data
          ? props.data.music.map((d, i) => (
              <div
                className="playlist-container"
                key={`${d.title}-${i}`}
                style={{
                  borderRight:
                    i < props.data.music.length - 1
                      ? "2px solid #2222"
                      : "none",
                }}
              >
                <div className="playlist-div">
                  <div className="playlist-header">
                    <h3>{d.title}</h3>
                    <p>{d.description}</p>
                  </div>
                  <div className="playlist-tracks">
                    {d.tracks.map((e, j) => (
                      <PlaylistPlayer tracks={e} key={`${e.title}-${j}`} />
                    ))}
                  </div>
                </div>
              </div>
            ))
          : "Loading..."}
      </div>
      <hr />
    </section>
  );
};

export default Category;
