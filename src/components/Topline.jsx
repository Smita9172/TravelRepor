import React from 'react';
import "../components/ToplineStyle.css";

import janak from '../photos/janakimg1.jpg';

const Topline=()=>{
    return(
        <div>
        <div className='topcolor'>
        {/* <div className='container'>
        <div>
        <h6  className="skip" >For Visiting the places </h6>
        </div>
        </div> */}
        </div>
        <div className='topline-img'>
        <div className="container  ">
        <div className='row branding' >
        <div className='col-xs-12'>
            <a href=''> <img src={janak} className='img' alt='janakimg'/></a>
            <h2 className='site-title' > <a href=""  >J.A.N.A.K.K</a> </h2>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Topline;