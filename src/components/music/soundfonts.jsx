import AudioPlayer from "./AudioPlayer";

export const Playlist = (props) => {

    return (
        <div id="music__playlist" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                        <h3>
                            {props.data ? props.data.title : "Loading..."}
                        </h3>
                        <p>
                            {props.data ? props.data.paragraph : "Loading..."}
                        </p>
                </div>
                <div className="row music__playlist-row">
                    {props.data ? props.data.music.map((d, i) => (
                        <div className="music__playlist-container" key={`${d.title}-${i}`}>
                            <div className="music__playlist-div">
                                <h3>
                                    {d.title}
                                </h3>
                                <p>
                                    {d.description}
                                </p>
                                <div className="music__playlist-tracks">
                                    {d.tracks.map((e, j) => (
                                        <AudioPlayer tracks={e} key={`${e.title}-${j}`}></AudioPlayer>
                                    ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                    : "Loading..."}
                </div>
                <hr />
            </div>
        </div>
    ); 
};
