
export const About = (props) => {
  return (
    <div id="site-about" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-sm-6">
            <div className="site-about__body">
              <h2>About Me</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <ul className="site-about__list">
                {props.data
                    ? props.data.list.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                    : "loading"}
              </ul>
            </div>
            <div className="btn-container">
              <a className="btn btn-custom" href="/about">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
