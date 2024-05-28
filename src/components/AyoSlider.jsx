import React from 'react';
import '../components/CSS/ImageSlider.css'
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import ramjanam from '../photos/ramjanam.avif'
import rajghat from '../photos/rajghat.jpg'
import brindavan from '../photos/brindavan.webp'
import guptar from '../photos/guptar.avif'

import kanakayo from '../photos/kanakayo.jpg'
import saryuayo from '../photos/saryuayo.jpg'


function NewSlide(prop){
  return(
    <div className=" fluid-container lbanner">
              <div className="col-xs-12 slideImg">
              <img src={prop.imgsrc} className="Simg" />
              </div>
              </div>
  )
}



function AyoSlider(){
    return(
       <div >
            <Carousel className='imgSlide' >
              <Carousel.Item  >
              <NewSlide imgsrc={ramjanam}  />
          
              </Carousel.Item>
              <Carousel.Item  >
              <NewSlide imgsrc={saryuayo} />
                
              </Carousel.Item>
              <Carousel.Item>
              <NewSlide  imgsrc={brindavan} />
               
              </Carousel.Item>
              <Carousel.Item>
              <NewSlide imgsrc={guptar} />
              
                
              </Carousel.Item>
            </Carousel>
            </div>
          );
}
export default AyoSlider;