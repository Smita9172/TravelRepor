import React from 'react';
import { Link } from "react-router-dom";
import '../components/CSS/MidSec.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gkptemplefront from '../photos/gkptemplefront.avif'
import rammandir3 from '../photos/rammandir3.jpg';
import agrataj3 from'../photos/agrataj3.jpg';
import vrns3 from '../photos/vrnss3.jpg'

const Midsec=(props)=>{
    return(
        <div className='col-xs-12 placeImg'> 
        <img src={props.imgsrc} alt='Photo' className='Pimg' />
        <div className='card_info'>
            <h3>{props.title}</h3>
            <Link to={props.Link} className='Parc' >
            <a href='' target='blank'>Explore More</a>
            </Link>
        </div>
        </div>
    )
}
const MidSec1=()=>{
    return(
        <div className='midsec1' >
            <div style={{padding:"80px 0"}}>
        <Container>
            <Row>
                <Col xs lg="4" >
                <Midsec 
                   imgsrc={rammandir3}
                   title="Ayodhya"
                   Link="/Ayo"
             />
             <Midsec
                imgsrc={agrataj3}
                title="Agra"
                Link="/agra" 
             />
                </Col>
                <Col md="auto" lg="4"> 
                <div className='midpara'>
                <h4>
                The J.A.N.A.K.K explore the beauty of Uttar Pradesh, mainly the places such as Agra, Ayodhya, Banaras and Gorakhpur.
                      </h4>
                     </div>
                </Col>
                <Col xs lg="4"> 
                
                 <Midsec 
                        imgsrc={vrns3}
                        title="Banaras"
                        Link="/Vrns"
            />
            <Midsec
                imgsrc={gkptemplefront}
                title="Gorakhpur"
               Link="/gorakhpur"
             />
                </Col>
            </Row>
        </Container>
        </div>
        </div>
    )
}
 export default MidSec1;