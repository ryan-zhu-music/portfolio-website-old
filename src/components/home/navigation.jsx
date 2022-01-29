export const Navigation = () => {

  return (
  <nav id='site-nav' className='navbar navbar-default'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a href="#">
            <img src={require("../../assets/img/logo-white.png").default} className="site-nav__logo"/>
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#' className='page-scroll'>
                Home
              </a>
            </li>
            <li>
              <a href='#site-about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#site-music' className='page-scroll'>
                Music
              </a>
            </li>
            <li>
              <a href='#site-contact' className='page-scroll'>
                Contact
              </a>
            </li>
            <li>
              <div className="btn-container">
                <a href="/music" className="btn btn-custom">
                  Browse Music
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};
