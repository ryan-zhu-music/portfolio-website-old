export const About = (props) => {
    return (
        <div id="portfolio-about" data-aos="fade-up">
            <div className="container">
                <div className="row text-center">
                    <p>
                        {props.data ? props.data.paragraph : "About Me"}
                    </p>
                    <hr/>
                </div>
            </div>
        </div>
    ); 
};
