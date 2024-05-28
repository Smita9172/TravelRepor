import React from 'react';
import '../components/CSS/ImageSlider.css'
import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import doorVishwanth from '../photos/doorVishwanth.webp'
import ghatvrns1 from '../photos/ghatvrns1.jpg'
import bharatNew from '../photos/bharatNew.jpg'
import standingbudha from '../photos/standingBudha.jpg'

function NewSlide(prop){
  return(
    <div className=" fluid-container lbanner">
              <div className="col-xs-12 slideImg">
              <img  src={prop.imgsrc} className="Simg" />
              </div>
              </div>
  )
}



function VrnsSlider(){
    return(
       <div >
            <Carousel className='imgSlide' >
              <Carousel.Item  >
              <NewSlide imgsrc={doorVishwanth}/>
          
              </Carousel.Item>
              <Carousel.Item  >
              <NewSlide imgsrc={ghatvrns1} />
                
              </Carousel.Item>
              <Carousel.Item>
              <NewSlide  imgsrc={bharatNew} />
               
              </Carousel.Item>
              <Carousel.Item>
              <NewSlide imgsrc={standingbudha} />
              
                
              </Carousel.Item>
            </Carousel>
            </div>
          );
}
export default VrnsSlider;