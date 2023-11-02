import React from 'react'
import "./ProfileSummary.css"
import img from "../../assets/screenshot.png"

function ProfileSummary() {
    return (
        <div className="profilesummary">


            <img src={img} alt="profil_img"/>
            <p> username</p>
            <div className="switch">
                <a>Switch</a>
            </div>


        </div>
    )
}

export default ProfileSummary;