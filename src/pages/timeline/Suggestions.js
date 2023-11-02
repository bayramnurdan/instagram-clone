import React from "react";
import "./Suggestions.css";
import SuggestedPerson from "./SuggestedPerson";

function Suggestions() {
    return (
        <div className="suggestions">
            <div className="suggestions__title">
                <p>Suggested for you </p>
                <a> See all</a>
            </div>
            <div className="suggested__people">
                <SuggestedPerson/>
                <SuggestedPerson/>
                <SuggestedPerson/>
                <SuggestedPerson/>
                <SuggestedPerson/>
            </div>
        </div>
    )
}

export default Suggestions;