import React from 'react';
import '../components/CSS/ImageSlider.css'
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import gkprail from '../photos/gkprail.jpeg'
import chidhya from '../photos/chidhya.jpeg'
import church from '../photos/churchgkp.jpeg'
import vpark from '../photos/vpark.jpeg'

function NewSlide(prop){
  return(
    <div className=" fluid-container lbanner">
              <div className="col-xs-12 slideImg">
              <img  src={prop.imgsrc} className="Simg" />
              </div>
              </div>
  )
}



function GkpSlider(){
    return(
       <div >
            <Carousel className='imgSlide' >
              <Carousel.Item  >
              <NewSlide imgsrc={gkprail}  />
          
              </Carousel.Item>
              <Carousel.Item  >
              <NewSlide imgsrc={chidhya} />
                
              </Carousel.Item>
              <Carousel.Item>
              <NewSlide  imgsrc={church} />
               
              </Carousel.Item>
              <Carousel.Item>
              <NewSlide imgsrc={vpark} />
              
                
              </Carousel.Item>
            </Carousel>
            </div>
          );
}
export default GkpSlider;