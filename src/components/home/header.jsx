export const Header = (props) => {
  return (
    <header id="header">
      <div className="site-header">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 site-header__body">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
              </div>
              <div className="col-sm-4">
                {/*image stuff here*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
