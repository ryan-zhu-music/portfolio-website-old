import { useState, useEffect } from "react";
import "./../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navigation } from "./Navigation";
import { Footer } from "./home/footer";

import HomeData from "../data/home_data.json";

const Statistics = (props) => {
    const [data, setData] = useState([]);
    const [link, setLink] = useState("");
    const [result, setResult] = useState([]);

    useEffect(() => {
        setData(HomeData);
    }, [])

    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-quart",
        });
        AOS.refresh();
    }, []);

    const handleChange = (l) => {
        setLink(l);
    };

    const handleSubmit = () => {
        console.log(link);
        var requestOptions = {
            method: "GET",
        };

        fetch(
        "https://musescore-statistics.herokuapp.com/get-statistcs?link=" +
            link,
        requestOptions
        )
        .then((response) => response.text())
        .then((res) => {
            setResult(JSON.parse(res))
        })
        .catch((error) => {
            console.log("error", error);
        });
    };
    return (
        <div>
        <Navigation />
        <div id="statistics">
            <div className="container">
                <div className="row">
                <div className="col-sm-6"  data-aos="fade-right">
                    <div className="site-contact__body">
                    <h2>MuseScore Statistics</h2>
                    <p>Send an email, or message me via any of the social media platforms below.</p>
                    </div>
                </div>
                <div className="col-sm-6" data-aos="fade-left">
                    <div className="site-contact__form-container">
                    <form name="site-contact__form" validate onSubmit={handleSubmit} autocomplete="off" className="site-contact__form">
                        <div className="form-group">
                            <input
                                type="text"
                                id="link"
                                name="link"
                                className="site-contact__form-input"
                                placeholder="Link"
                                required
                                onChange={handleChange}
                            />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="btn-container">
                        <button type="submit" className="btn btn-custom">
                            Get Statistics
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <Footer data={data.Footer}/>
        </div>
    );
};

export default Statistics;