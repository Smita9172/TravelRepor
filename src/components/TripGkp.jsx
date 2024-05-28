
import React from "react";
import "./CSS/Trip.css"
import TripData from "./TripData";
import TripNext from "./TripNext";
import {tripgkp} from '../constants/tripgkp'
import {hotelgkp} from '../constants/hotelgkp'
import {gkpReligious} from '../constants/gkpReligious'
import { hotelnextGkp } from "../constants/HotelnextGkp";
import {parkNextGkp} from '../constants/parkNextGkp'
import { GkpPark } from "../constants/GkpPark";
import ParkData from "./ParkData";



function TripGkp(props) {
    return (
        <>
        <div className="trip">
            <h1>Religious Places</h1>
            <p>Within the walls of a temple, silence speaks louder than words, and reverence whispers the language of the soul.</p>
            <div className="tripCard">
                {tripgkp?.map((item, index) => (
                <TripData
                key={item?.index}
                 image={item?.image}
                    heading={item?.heading}
                    location={item?.location}
                    para={item?.para}
                     />
                ))}
            </div>
        </div>
        <div className="container">
            <div className="nextStyle">
                <h4 style={{marginBottom:"40px"}}>Explore Other Religious Place </h4>
           {gkpReligious?.map((item,index)=>(
            <TripNext
            title={item?.title}
             Address={item?.Address}
            />
           ))}
           </div>
           </div>
       

        <div className="trip">
            <h1>Hotel and Restarurants </h1>
            <p></p>
            <div className="tripCard">
            {hotelgkp?.map((item, index) => (
                <TripData 
                image={item?.image}
                   heading={item?.heading}
                   location={item?.location}
                  />
                ))}
            </div>
        </div>
        <div className="container">
            <div className="nextStyle">
                <h4 style={{marginBottom:"40px"}}>Visting other Hotel and Restaurant</h4>
           {hotelnextGkp?.map((item,index)=>(
            <TripNext
            title={item?.title}
             Address={item?.Address}
            />
           ))}
           </div>
           </div>


        <div className="trip">
            <h1>Explore More</h1>
            <p>Discover the essence of hospitality and indulge in culinary delights as you embark on your journey with us</p>
            <div className="tripCard">
            {GkpPark?.map((item, index) => (
                <ParkData 
                image={item?.image}
                   heading={item?.heading}
                   location={item?.location}
                   Timings={item?.Timings}
                  />
                ))}
            </div>
        </div>
        <div className="container">
            <div className="nextStyle">
                <h4 style={{marginBottom:"40px"}}>Visting other Park</h4>
           {parkNextGkp?.map((item,index)=>(
            <TripNext
            title={item?.title}
             Address={item?.Address}
            />
           ))}
           </div>
           </div>

        </>



    )
}

export default TripGkp;