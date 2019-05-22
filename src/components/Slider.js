import React from 'react'
import SliderPlugin from "react-slick";
import FirstSlider from './FirstSlider';

var settings = {
    dots: true,
    dotsClass: "customDots",
    infinite: true
  };

const Slider = () =>{
    return(
        <div className="gray-gradient firstSlider" style={{marginTop: "72px",height: "70vh"}}>
            <SliderPlugin {...settings}>
                <div>
                    <FirstSlider/>
                </div>
            </SliderPlugin>
        </div>
    );
}

export default Slider;