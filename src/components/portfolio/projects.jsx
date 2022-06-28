import useWindowDimensions from "../../hooks/useWindowDimensions";
import DisplayTags from "./DisplayTags";

export const Projects = (props) => {
  const { width } = useWindowDimensions();
  return (
    <div id="portfolio-projects" data-aos="fade-up">
      <div className="container">
        <h3 className="text-center">
          {props.data ? props.data.title : "Projects"}
        </h3>
        <div>
          {props.data
            ? props.data.projects.map((d, i) =>
                i % 2 === 0 ? (
                  <div
                    key={`${d.name}-${i}`}
                    className="row portfolio__project-container"
                  >
                    <div
                      className="col-md-8"
                      data-aos={width >= 768 ? "fade-right" : "fade-up"}
                    >
                      <h3 className="portfolio__project-name">{d.name}</h3>
                      <h6>{d.date}</h6>
                      <p>
                        {d.description}{" "}
                        {d.link2 && (
                          <a
                            href={d.link2[1]}
                            className="link-underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {d.link2[0] + "."}
                          </a>
                        )}
                      </p>
                      <DisplayTags tags={d.tags} />
                      {d.link && (
                        <div className="btn-container">
                          <a
                            href={d.link}
                            className="btn btn-custom"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit
                          </a>
                        </div>
                      )}
                    </div>
                    {width >= 768 ? (
                      <div
                        className="col-md-4"
                        data-aos="fade-left"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          src={d.image}
                          className="portfolio__image"
                          alt="img.png"
                        />
                      </div>
                    ) : (
                      <hr />
                    )}
                  </div>
                ) : (
                  <div
                    key={`${d.name}-${i}`}
                    className="row portfolio__project-container"
                  >
                    {width >= 768 && (
                      <div
                        className="col-md-4"
                        data-aos="fade-right"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <img
                          src={d.image}
                          className="portfolio__image"
                          alt="img.png"
                        />
                      </div>
                    )}
                    <div
                      className="col-md-8"
                      data-aos={width >= 768 ? "fade-left" : "fade-up"}
                    >
                      <h3 className="portfolio__project-name">{d.name}</h3>
                      <h6>{d.date}</h6>
                      <p>
                        {d.description}{" "}
                        {d.link2 && (
                          <a
                            href={d.link2[1]}
                            className="link-underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {d.link2[0] + "."}
                          </a>
                        )}
                      </p>
                      <DisplayTags tags={d.tags} />
                      {d.link && (
                        <div className="btn-container">
                          <a
                            href={d.link}
                            className="btn btn-custom"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Visit
                          </a>
                        </div>
                      )}
                    </div>
                    {width < 768 && <hr />}
                  </div>
                )
              )
            : "Loading..."}
        </div>
        <hr />
      </div>
    </div>
  );
};
