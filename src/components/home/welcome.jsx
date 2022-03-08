import React from "react";

import Box from "./box";

import "./style.css"

export default function Welcome(){
    return(
        <>
        {/* <div><img src={curve} alt="" style={{"width" : "100%", "transform" : "rotate(180deg)", "height" : "100px"}}/></div> */}
        <div className="py-5 my-8 mx-7">
            <h1 className="text-5xl py-4 uppercase text-blue-700">Atal Incubation Centre</h1>
            <h3 className="text-3xl py-4">Warm ​Welcome to Atal Incubation Centre - Pondicherry Engineering College Foundation (AIC-PECF).</h3>
            <hr className="line" />
            <p className="text-xl py-8 mt-9">Atal Incubation Centre - Pondicherry Engineering College Foundation (AIC-PECF) is fully supported and funded by Atal Innovation Mission (AIM), Niti Aayog, Government of India. AIC-PECF was initiated to provide a platform to assist and enable young entrepreneurs to initiate startups for the  commercial exploitation of technologies developed by them</p>
            <Box />
        </div>
        </>
    )
} 