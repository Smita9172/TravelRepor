
import React from "react";
import "./CSS/Trip.css"
import TripData from "./TripData";
import TripNext from "./TripNext";

import tajConvention from '../photos/tajConvention.jpg'
import fabHotel from '../photos/fabHotel.jpg'
import InnHotel from '../photos/InnHotel.avif'
import ItcMughal from '../photos/ItcMughal.jpeg'
import { tripData  } from "../constants/trip";
import { tripData1 } from "../constants/tripNext";
import { Religious } from "../constants/Religious";
import { Hotel } from "../constants/Hotel";
import {Monuments} from "../constants/Monuments"
import { hotelnext } from "../constants/Hotelnext";
import { Park } from "../constants/Park";
import ParkData from "./ParkData";


console.log(tripData, 'tripData');
function Trip(props) {
    return (
        <>
        <div className="trip">
            <h1>Monuments</h1>
            <p>Living the gospel and standing in holy places is not always easy, but I testify that it is worth it.</p>
            <div className="tripCard">
                {tripData?.map((item, index) => (
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
                <h4 style={{marginBottom:"40px"}}>Explore Other Monuments</h4>
           {Monuments?.map((item,index)=>(
            <TripNext
            title={item?.title}
             Address={item?.Address}
            />
           ))}
           </div>
           </div>
       
        <div className="trip">
            <h1>Religious Places</h1>
            <p>Living the gospel and standing in holy places is not always easy, but I testify that it is worth it.</p>
            <div className="tripCard">
            {Religious?.map((item, index) => (
                <TripData 
                image={item?.image}
                   heading={item?.heading}
                   location={item?.location}
                   para={item?.para} />
                ))}
            </div>
        </div>
        <div className="container">
            <div className="nextStyle">
                <h4 style={{marginBottom:"40px"}}>Explore Other Temple</h4>
           {tripData1?.map((item,index)=>(
            <TripNext
            title={item?.title}
             Address={item?.Address}
            />
           ))}
           </div>
           </div>
        

        <div className="trip">
            <h1>Amusements </h1>
            <p></p>
            <div className="tripCard">
            {Hotel?.map((item, index) => (
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
           {hotelnext?.map((item,index)=>(
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
            {Park?.map((item, index) => (
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

export default Trip;