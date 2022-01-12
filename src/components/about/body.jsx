
export const Body = (props) => {

    return (
        <div id="about-body" data-aos="fade-up">
            <div className="container">
                {props.data ? props.data.paragraphs.map((d, i) => (
                <p key={`${d.title}-${i}`}>{d}</p>
            ))
            : "Loading..."}
            <hr />
            </div>
        </div>
    ); 
};
