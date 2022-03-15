import React from "react";

const DisplayTags = ({ tags }) => (
    <div className="portfolio__tags-container">
        {
            tags ? tags.map((t, i) => (
                <div className="portfolio__tags" style={{backgroundColor: t[1], boxShadow: `0 0 6px ${t[1]}`}} key={`${i}`}>
                    <p>{t[0]}</p>
                </div>
            )) : "Loading..."
        }
    </div>
);

export default DisplayTags;
