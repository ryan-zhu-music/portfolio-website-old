import profile from '../../assets/img/Profile.png'; 

export const About = (props) => {
  return (
    <div id="site-about">
      <div className="container">
        <div className="row" style={{height: "60%"}}>
          <div className="col-sm-6" style={{textAlign: "center"}} data-aos="fade-right">
            <img src={profile} className="site-about__image" alt="Profile.png" />
          </div>
          <div className="col-sm-6 site-about__content"  data-aos="fade-left">
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
