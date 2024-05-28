import React from 'react';
import '../components/CSS/ImageSlider.css'
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import agranew from '../photos/agranew2.webp'
import agraFort from '../photos/agraFort.jpg'
import agraNewTaj from '../photos/agraNewTaj.jpeg'
import itmad from '../photos/itmad.jpg'
import '../components/CSS/PageLine.css'


function NewSlide(prop){
    return(
      <div className=" fluid-container lbanner">
                <div className="col-xs-12 slideImg">
                <img  src={prop.imgsrc} className="Simg" />
                </div>
                </div>
    )
  }
   function Pline(props){
    return(
      <>
      <div className='Ppage-out'>
    <div className="container ">
    <div className="col-lg-12 Ppage .mukta-semibold">
        <h6>{props.para}</h6>
        <p>{props.para1}</p>
        </div>
        </div>
        </div>
        </>
        )
}

  
function AgraSlider(){
    return(
      <>
       <div >
            <Carousel className='imgSlide' >
              <Carousel.Item  >
              <NewSlide imgsrc={agranew}  />
          
              </Carousel.Item>
              <Carousel.Item  >
              <NewSlide imgsrc={agraFort} />
                
              </Carousel.Item>
              <Carousel.Item>
              <NewSlide  imgsrc={agraNewTaj} />
               
              </Carousel.Item>
              <Carousel.Item>
              <NewSlide imgsrc={itmad} />
              
                
              </Carousel.Item>
            </Carousel>
            </div>
          
                <Pline para="Agra , home to the iconic Taj Mahal, boasts stunning Mughal architecture and rich cultural heritage, making it a must-visit destination for history and beauty lovers alike "
                para1="Agra is easily one of the most popular tourist destinations in India; the site of Shah Jahan’s monument of love, the inimitable Taj Mahal, built in honour of his late wife Mumtaz Mahal, and a stone’s throw from the historic Fatehpur Sikhri city. Agra attracts massive traveller crowds pretty much all year round."
                 />
         </>
            
          );
}
export default AgraSlider;