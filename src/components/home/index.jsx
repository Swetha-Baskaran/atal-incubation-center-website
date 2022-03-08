import React from "react";
import Collabrators from "./collabrators";
import Facilities from "./facilities";
import Welcome from "./welcome";

export default function Home(){
    return(
        <>
          <Welcome />
          <Facilities />
          <Collabrators />
        </>
    )
} 