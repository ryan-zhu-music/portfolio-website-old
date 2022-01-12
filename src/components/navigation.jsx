export const Navigation = (props) => {
  return (
    <header className="site-nav">
      <div className="container site-nav__container">
        <div className="row" style={{display: 'flex', alignItems: 'center'}}>
          <div className="col-sm-2">
              <a href="./"><img src={require("../assets/img/logo-white.png").default} className="site-nav__logo"/></a>
          </div>
          <nav className="col-sm-8">
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
          <div className="col-sm-2">
            <div className="btn-container">
              <a href="./music" className="btn btn-custom">
                Browse Music
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
