import React from "react";
import "./Timeline.css";
import Suggestions from "./Suggestions";

function Timeline() {
    return (
        <div className="timeline">
            <div className="timeline__left">LEFT</div>
            <div className="timeline__right">
                <Suggestions/>
            </div>
        </div>
    )
}

export default Timeline;