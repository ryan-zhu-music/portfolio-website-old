export const Header = (props) => {
  return (
    <div id="portfolio-header" data-aos="fade-up">
      <div className="container">
        <div className="row text-center">
          <h2>{props.data ? props.data.title : "Portfolio"}</h2>
          <h4>{props.data ? props.data.subtitle : "Loading..."}</h4>
          <div className="btn-container" style={{ marginTop: "20px" }}>
            <a
              href="/resume.pdf"
              className="btn btn-custom"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};
