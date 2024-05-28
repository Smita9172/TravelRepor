import "./CSS/Trip.css"
import React from "react";
function GhatVrns(props) {
    return (
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="image" />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.para}</p>


        </div>
    )
}


export default GhatVrns