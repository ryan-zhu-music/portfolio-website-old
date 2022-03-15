import DisplayTags from "./DisplayTags";

export const Projects = (props) => {
    return (
        <div id="portfolio-projects" data-aos="fade-up">
            <div className="container">
                <h3 className="text-center">
                    {props.data ? props.data.title : "Projects"}
                </h3>
                <div>
                    {props.data ? props.data.projects.map((d, i) => (
                        (i % 2 === 0) ? (
                            <div key={`${d.name}-${i}`} className="row portfolio__project-container">
                                <div className="col-sm-8" data-aos="fade-right">
                                    <h3 className="portfolio__project-name">{d.name}</h3>
                                    <h6>{d.date}</h6>
                                    <p>{d.description} {d.link2 && (<a href={d.link2[1]} className="link-underline" target="_blank" rel="noopener noreferrer">{d.link2[0]  + "."}</a>)}</p>
                                    <DisplayTags tags={d.tags}/>
                                    {d.link && (<div className="btn-container">
                                        <a href={d.link} className="btn btn-custom" target="_blank" rel="noopener noreferrer">
                                            Visit
                                        </a>
                                    </div>)}
                                </div>
                                <div className="col-sm-4" data-aos="fade-left">
                                    <img src={d.image} className="portfolio__image" alt="img.png" />
                                </div>
                            </div>) : (
                            <div key={`${d.name}-${i}`} className="row portfolio__project-container">
                                <div className="col-sm-4" data-aos="fade-right">
                                    <img src={d.image} className="portfolio__image" alt="img.png" />
                                </div>
                                <div className="col-sm-8" data-aos="fade-left">
                                    <h3 className="portfolio__project-name">{d.name}</h3>
                                    <h6>{d.date}</h6>
                                    <p>{d.description} {d.link2 && (<a href={d.link2[1]} className="link-underline" target="_blank" rel="noopener noreferrer">{d.link2[0]  + "."}</a>)}</p>
                                    <DisplayTags tags={d.tags}/>
                                    {d.link && (<div className="btn-container">
                                        <a href={d.link} className="btn btn-custom" target="_blank" rel="noopener noreferrer">
                                            Visit
                                        </a>
                                    </div>)}                               
                                </div>
                            </div>
                        )
                    )) : "Loading..."}
                </div>
                <hr/>
            </div>
        </div>
    ); 
};
