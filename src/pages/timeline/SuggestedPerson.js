import React from "react";
import "./SuggestedPerson.css";
import img from "../../assets/screenshot.png";

function SuggestedPerson() {
    return (
        <div className="suggestedperson">
            <img src={img} alt="profil_img"/>
            <p> username</p>
            <div className="follow">
                <a>Follow</a>
            </div>
        </div>
    )
}

export default SuggestedPerson;