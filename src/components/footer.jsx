export const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="container site-nav__container">
        <div className="row" style={{display: 'flex', alignItems: 'center'}}>
          <div className="col-sm-2">
              <a href="./"><img src={require("../assets/img/logo-white.png").default} className="site-nav__logo"/></a>
          </div>
          <nav className="col-sm-5">
            <ul className="nav navbar-nav site-nav__items">
              <li>
                <a href="./" className="page-scroll">
                  Home
                </a>
              </li>
              <li>
                <a href="./about" className="page-scroll">
                  About
                </a>
              </li>
              <li>
                <a href="./music" className="page-scroll">
                  Music
                </a>
              </li>
              <li>
                <a href="./contact" className="page-scroll">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="col-sm-5 site-footer__social">
                <a href={props.data ? props.data.facebook : "/"} target="_blank">
                    <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href={props.data ? props.data.twitter : "/"} target="_blank">
                    <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href={props.data ? props.data.instagram : "/"} target="_blank">
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a href={props.data ? props.data.youtube : "/"} target="_blank">
                    <i className="fab fa-discord fa-2x"></i>
                </a>
                <a href={props.data ? props.data.youtube : "/"} target="_blank">
                    <i className="fab fa-youtube fa-2x"></i>
                </a>
                <a href={props.data ? props.data.soundcloud : "/"} target="_blank">
                    <i className="fab fa-soundcloud fa-2x"></i>
                </a>
        </div>
        </div>
      </div>
    </footer>
  );
};
