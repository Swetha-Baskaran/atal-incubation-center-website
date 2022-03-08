import React from "react";

import curve from "../../assets/curve.jfif"

export default function Facilities(){
    return(
        <>
        <div><img src={curve} alt="" style={{"width" : "100%", "height" : "120px"}}/></div>
        <div className="bg-black text-white px-7 py-8" >
            <h1 className="text-5xl">Our Lab Facilities</h1>

        </div>
        </>
    )
} 