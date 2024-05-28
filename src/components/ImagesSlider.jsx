import React from 'react';
import '../components/CSS/ImageSlider.css'

import gkpTemple from  '../photos/gkpTemple.webp';

import ghatvrns from '../photos/ghatvrns.jpg';
import taj_mahal_03New from '../photos/taj_mahal_03New.jpg';
import newRammandir from '../photos/newRammandir.png';



import Carousel from 'react-bootstrap/Carousel'
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

function NewSlide(prop){
  return(
    <div className=" fluid-container lbanner">
              <div className="col-xs-12 slideImg">
              <img  src={prop.imgsrc} className="Simg" />
              </div>
              </div>
  )
}
function NewSlideHP(prop){
  return(
    <div className='fluid-container lbanner'>
      <div className="slideHP">
        <h3>{prop.heading}</h3>
        <p>{prop.para}</p>
      </div>

    </div>
  )
}

function CarouselPage(){
    return(
       <div >
            <Carousel className='imgSlide' >
              <Carousel.Item  >
              <NewSlide imgsrc={newRammandir}  />
                <Carousel.Caption>
                  <NewSlideHP heading="Ram Janmabhoomi (Birthplace of Lord Ram) "
                  para="Discover the sacred vibes of Ram Mandir, where every stone echoes the tales of Lord Ram's glory" />
                
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item  >
              <NewSlide imgsrc={gkpTemple} />
                <Carousel.Caption>
                  <NewSlideHP 
                  heading="Gorakhnath Temple"
                  para="Discover the spiritual treasures of Gorakhnath Mandir, where devotion and inner exploration Intertwine"
                  />
                  
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <NewSlide  imgsrc={taj_mahal_03New} />
                <Carousel.Caption>
                  <NewSlideHP heading="Taj Mahal (Monument of Eternal Love)"
                  para="Let the ethereal beauty of the Taj Mahal take your breath away, as you immerse yourself in its unparalleled grace and magnificence." />
                  
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <NewSlide imgsrc={ghatvrns} />
              
                <Carousel.Caption>
                  <NewSlideHP 
                  heading="Varanasi Heritage Town"
                  para="Varanasi is not just a place; it's an experience that resonates with the soul, leaving an imprint for eternity."
                  />
                  
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            </div>
          );
}
export default CarouselPage;