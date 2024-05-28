import "./CSS/Trip.css"
import React from "react";
function TripNext(props){
    return(
        <div className="row " >
            <div className="col-xs-12 col-lg-4">
                <h6>{props.title}</h6>
            </div>
            <div className="col-xs-12 col-lg-8">
            <p>{props.Address}</p>
            </div>
        </div>
    )
}

export default TripNext