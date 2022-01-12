export const Footer = (props) => {
    return (
        <footer className="container">
            <div className="row">
                <hr />
                <div className="col-sm-3"/>
                <div className="col-sm-6 site-footer__social">
                    <a href={props.data ? props.data.facebook : "/"} target="_blank">
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href={props.data ? props.data.twitter : "/"} target="_blank">
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href={props.data ? props.data.instagram : "/"} target="_blank">
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href={props.data ? props.data.youtube : "/"} target="_blank">
                        <i className="fab fa-discord fa-2x"></i>
                    </a>
                    <a href={props.data ? props.data.youtube : "/"} target="_blank">
                        <i className="fab fa-youtube fa-2x"></i>
                    </a>
                    <a href={props.data ? props.data.soundcloud : "/"} target="_blank">
                        <i className="fab fa-soundcloud fa-2x"></i>
                    </a>
                </div>
                <div className="col-sm-3"/>
            </div>
        </footer>
    );
}