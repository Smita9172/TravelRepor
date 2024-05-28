
import React from "react";
import "./CSS/Trip.css"
import TripData from "./TripData";
import TripNext from "./TripNext";
import { tripVrns } from "../constants/tripVrns";
import { vrnsReligious } from "../constants/vrnsReligious";
import { hotelnextGkp } from "../constants/HotelnextGkp";
import ParkData from "./ParkData";
import { ghatvrns } from "../constants/ghatVrns";
import GhatVrns from "./GhatVrns";
import {ghatNext} from '../constants/ghatNext'
import { hotelvrns } from "../constants/hotelvrns";
import {vrnsPark} from '../constants/vrnsPark'

function TripVrns(props) {
    return (
        <>
        <div className="trip">
            <h1>Religious Places</h1>
            <p>Within the walls of a temple, silence speaks louder than words, and reverence whispers the language of the soul.</p>
            <div className="tripCard">
                {tripVrns?.map((item, index) => (
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
           {vrnsReligious?.map((item,index)=>(
            <TripNext
            title={item?.title}
             Address={item?.Address}
            />
           ))}
           </div>
           </div>

           <div className="trip">
            <h1>Ghats in Varansi </h1>
            <p></p>
            <div className="tripCard">
            {ghatvrns?.map((item, index) => (
                <GhatVrns
                image={item?.image}
                   heading={item?.heading}
                   para={item?.para}
                  />
                ))}
            </div>
        </div>
           
        <div className="container">
            <div className="nextStyle">
                <h4 style={{marginBottom:"40px"}}>Visting other Ghat in Varansi</h4>
           {ghatNext?.map((item,index)=>(
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
            {hotelvrns?.map((item, index) => (
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
            {vrnsPark?.map((item, index) => (
                <ParkData 
                image={item?.image}
                   heading={item?.heading}
                   location={item?.location}
                   Timings={item?.Timings}
                  />
                ))}
            </div>
        </div>

        </>



    )
}

export default TripVrns;