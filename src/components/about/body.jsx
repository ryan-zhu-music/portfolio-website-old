
export const Body = (props) => {
    return (
        <div id="about-body" data-aos="fade-up">
            <div className="container">
                <h3>{props.data ? props.data.subtitle : "Loading..."}</h3>
                <div className="row about-body__row">
                    {
                        props.data ? props.data.Music.headers.map((h, i) => {
                            return (
                                <div key={`${i}-${h}`}>
                                    <h3>{h}</h3>
                                    <p>{props.data.Music.paragraphs[i]}</p>
                                </div>
                            )
                        }) : "Loading..."
                    }
                </div>
                <hr />
                    <div className="row  about-body__row">     
                        <h3>Personal Favourites</h3>
                        <div className="col-sm-6">
                            <h4>Composers</h4>
                            <ul className="about__list">
                                {
                                    props.data ? props.data.Music.composers.map((c, i) => {
                                        return (
                                            <li key={i}>
                                                {c}
                                            </li>
                                        )
                                    }) : "Loading..."
                                }
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <h4>Music</h4>
                            <ul className="about__list">
                                {
                                    props.data ? props.data.Music.music.map((m, i) => {
                                        return (
                                            <li key={i}>
                                                {m}
                                            </li>
                                        )
                                    }) : "Loading..."
                                }
                            </ul>
                        </div>
                    </div>
                <hr />
            </div>
        </div>
    ); 
};
