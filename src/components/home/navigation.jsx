import {useState, useEffect} from 'react';

export const Navigation = (props) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <header className={navbar ? "site-nav__active" : "site-nav"}>
      <div className="container site-nav__container">
        <div className="row" style={{display: 'flex', alignItems: 'center'}}>
          <div className="col-sm-2">
              <a href="#home"><img src={require("../../assets/img/logo-white.png").default} className="site-nav__logo"/></a>
          </div>
          <nav className="col-sm-8">
            <ul className="nav navbar-nav site-nav__items">
              <li>
                <a href="#" className="page-scroll">
                  Home
                </a>
              </li>
              <li>
                <a href="#site-about" className="page-scroll">
                  About
                </a>
              </li>
              <li>
                <a href="#site-music" className="page-scroll">
                  Music
                </a>
              </li>
              <li>
                <a href="#site-contact" className="page-scroll">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="col-sm-2">
            <div className="btn-container">
              <a href="/music" className="btn btn-custom">
                Browse Music
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
