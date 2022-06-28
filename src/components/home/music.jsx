import AudioPlayer from "./AudioPlayer";
import tracks from "../../data/tracks";

export const Music = (props) => {
  return (
    <div
      id="site-music"
      className="text-center"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="2000"
    >
      <div className="container">
        <div className="site-music__header">
          <h2>Music</h2>
          <p>{props.data ? props.data.paragraph : "Loading..."}</p>
        </div>
        <div className="row">
          {tracks
            ? tracks.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-4 align-items-center justify-content-center"
                >
                  <div className="site-music__audio ">
                    <div className="site-music__audio-header">
                      <h3>
                        {props.data ? props.data.subtitles[i] : "Loading..."}
                      </h3>
                    </div>
                    <AudioPlayer tracks={d}></AudioPlayer>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
        <div className="btn-container">
          <a className="btn btn-custom" href="/#/music">
            View more
          </a>
        </div>
      </div>
    </div>
  );
};
