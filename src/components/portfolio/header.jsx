export const Header = (props) => {
    return (
        <div id="portfolio-header" data-aos="fade-up">
            <div className="container">
                <div className="row text-center">
                    <h2>
                        {props.data ? props.data.title : "Portfolio"}
                    </h2>
                    <h4>
                        {props.data ? props.data.subtitle : "Loading..."}
                    </h4>
                    <hr/>
                </div>
            </div>
        </div>
    ); 
};
