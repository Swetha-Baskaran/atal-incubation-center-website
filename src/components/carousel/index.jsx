import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import "./style.css"

export default function CarouselComp(){
    return (
        <>
        <Carousel autoPlay  showArrows={false} showIndicators={false} showThumbs={false} showStatus={false} stopOnHover={false} label={false} infiniteLoop={true} renderIndicator={false}>
                <div className="img-hold">
                    <div className="img-text">
                       <div className="img-text-part shadow-2xl shadow-2xl">
                           <h2>Startup Inaugration</h2>    
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda debitis quae, explicabo voluptates magni consequuntur nesciunt similique placeat impedit eum unde doloribus natus officia harum cupiditate perferendis laudantium pariatur temporibus?</p>
                       <button>View More</button>
                       </div>
                    </div>
                    <img className="img" src="https://www.aicpecf.org/uploads/9/8/0/9/9809129/whatsapp-image-2021-03-05-at-13-17-27_orig.jpeg" alt="" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div className="img-hold">
                <div className="img-text">
                       <div className="img-text-part shadow-2xl">
                           <h2>Startup Inaugration</h2>    
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda debitis quae, explicabo voluptates magni consequuntur nesciunt similique placeat impedit eum unde doloribus natus officia harum cupiditate perferendis laudantium pariatur temporibus?</p>
                       <button>View More</button>
                       </div>
                    </div>
                    <img className="img" src="https://www.aicpecf.org/uploads/9/8/0/9/9809129/img-20180118-wa0035_orig.jpg" alt="" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div className="img-hold">
                <div className="img-text shadow-2xl">
                       <div className="img-text-part shadow-2xl">
                           <h2>Startup Inaugration</h2>    
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda debitis quae, explicabo voluptates magni consequuntur nesciunt similique placeat impedit eum unde doloribus natus officia harum cupiditate perferendis laudantium pariatur temporibus?</p>
                       <button>View More</button>
                       </div>
                    </div>
                    <img className="img" src="https://www.aicpecf.org/uploads/9/8/0/9/9809129/2p6a4286-1_orig.jpg" alt="" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        </>
    )
} 