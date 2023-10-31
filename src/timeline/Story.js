import React from 'react';
import "./Story.css";
import img from "../static/screenshot.png"

function Story(props) {
    return (
        <div className="story">
            <img className="story__photo" src={img} alt="story"/>
            {props.username}
        </div>
    )

}

export default Story;