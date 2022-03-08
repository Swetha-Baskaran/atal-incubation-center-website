import React from 'react'

import { AiFillCaretDown } from "react-icons/ai"

import logo from "../../../assets/logo.jpg" 

import "./style.css"

const Navbar = () => {
  return (
    <div className="nav opacity-75 h-24 absolute z-10 w-full text-white flex justify-between py-8 text-xl">
          <div className="logo mx-10 ">
            <img src={logo} alt="" style={{"height" : "3rem"}}/>
           </div>
            <ul className="sections flex mx-10 gap-4 ">
              <li className="hover:border-b-2 px-5">Home</li>
              <li className="hover:border-b-2 px-5">About</li>
              <li className="hover:border-b-2 px-5">Incubation</li>
              <li className="hover:border-b-2 px-5 flex items-center">Team & Mentors <AiFillCaretDown className="mt-1 ml-2" /></li>
              <li className="hover:border-b-2 px-5">Apply</li>
              <li className="hover:border-b-2 px-5 flex items-center">Products <AiFillCaretDown className="mt-1 ml-2" /></li>
              <li className="hover:border-b-2 px-5 flex items-center">Focus Area <AiFillCaretDown className="mt-1 ml-2" /></li>
            </ul>
    </div>
  )
}

export default Navbar