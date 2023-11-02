import React from "react";
import "./Timeline.css";
import Suggestions from "./Suggestions";
import Story from "./Story";
import Post from "./Post";
import ProfileSummary from "./ProfileSummary";

function Timeline() {
    return (
        <div className="timeline">
            <div className="timeline__left">
                <div className="stories">
                    <Story path="./static/screenshot.png" username="nurdanemin"/>
                    <Story path="./static/screenshot.png" username="nurdanemin"/>
                    <Story path="./static/screenshot.png" username="nurdanemin"/>
                    <Story path="./static/screenshot.png" username="nurdanemin"/>
                    <Story path="./static/screenshot.png" username="nurdanemin"/>
                    <Story path="./static/screenshot.png" username="nurdanemin"/>
                    <Story path="./static/screenshot.png" username="nurdanemin"/>
                    <Story path="./static/screenshot.png" username="nurdanemin"/>


                </div>
                <div className="posts">
                    <Post/>
                    <Post/>
                </div>
            </div>

            <div className="timeline__right">
                <ProfileSummary/>
                <Suggestions/>
            </div>
        </div>
    )
}

export default Timeline;