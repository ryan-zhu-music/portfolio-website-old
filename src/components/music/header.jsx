export const Header = (props) => {

    return (
        <div id="music-header">
            <div className="container">
                <div className="row text-center">
                    <h2>
                        {props.data ? props.data.title : "Music"}
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
