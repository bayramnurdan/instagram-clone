import React from 'react'
import Sidenav from "../../components/navigation/Sidenav";
import Timeline from "./Timeline";
import "./Homepage.css";

function Homepage() {
    return (
        <div className='homepage'>
            <div className="homepage__nav">
                <Sidenav/>
            </div>
            <div className="homepage__timeline">
                <Timeline/>
            </div>
        </div>
    )
}

export default Homepage