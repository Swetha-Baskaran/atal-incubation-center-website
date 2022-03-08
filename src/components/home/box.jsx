import React from "react";

import { GiSupersonicArrow } from "react-icons/gi"

import "./style.css"

export default function Box(){
    return(
        <div className="px-7 py-8" >
            <ol className="flex justify-center p-9">
                <li className="startup-box text-center shadow-2xl p-5 text-3xl m-6"> 
                    <div className="flex justify-center my-7"><GiSupersonicArrow  className="text-orange-600" /></div>
                    <div className="ml-6">Objective</div>
                </li>
                <li className="startup-box text-center shadow-2xl p-5 text-3xl m-6"> 
                    <div className="flex justify-center my-7"><GiSupersonicArrow className="text-orange-600" /></div>
                    <div className="ml-6">Benefits to students</div>
                </li>
                <li className="startup-box text-center shadow-2xl p-5 text-3xl m-6"> 
                    <div className="flex justify-center my-7"><GiSupersonicArrow className="text-orange-600" /></div>
                    <div className="ml-6">Future Plan</div>
                </li>
                <li className="startup-box text-center shadow-2xl p-5 text-3xl m-6"> 
                    <div className="flex justify-center my-7"><GiSupersonicArrow className="text-orange-600" /></div>
                 <div className="ml-6">Startups</div>
                </li>
            </ol>
        </div>
    )
} 