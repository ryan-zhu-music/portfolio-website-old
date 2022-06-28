import TypeAnimation from "react-type-animation";

export const Header = (props) => {
  return (
    <header id="site-header">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 site-header__body">
            <TypeAnimation
              cursor={false}
              sequence={[150, "Hello", 1000, "I'm Ryan Zhu"]}
              wrapper="h1"
            />
            <p data-aos="fade-up" data-aos-delay="3000">
              {props.data ? props.data.paragraph : "Loading"}
            </p>
          </div>
          <div className="col-sm-3" />
        </div>
      </div>
    </header>
  );
};
