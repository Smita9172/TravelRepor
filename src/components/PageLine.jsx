 import React from "react";

const Pline=(props)=>{
    <div className="container">
    <div className="col-lg-12 Ppage">
        <p>{props.para}</p>
        <p>{props.para1}</p>
        </div>
        </div>
}

let PageLine=()=>{

 <div className="container">
    <div className="col-lg-12 ">
        <Pline para="Agra , home to the iconic Taj Mahal, boasts stunning Mughal architecture and rich cultural heritage, making it a must-visit destination for history and beauty lovers alike " />
        <Pline para1="Agra is easily one of the most popular tourist destinations in India; the site of Shah Jahan’s monument of love, the inimitable Taj Mahal, built in honour of his late wife Mumtaz Mahal, and a stone’s throw from the historic Fatehpur Sikhri city. Agra attracts massive traveller crowds pretty much all year round."/>
        
        
    </div>

 </div>

}
export default PageLine
 