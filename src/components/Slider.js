import React from 'react'
import SliderPlugin from "react-slick";
import FirstSlider from './FirstSlider';
import './style/Slider.scss';

var settings = {
    dots: true,
    dotsClass: "customDots",
    infinite: true,
    marginTop: "72px"
  };

const Slider = () =>{
    return(
        <div className="gray-gradient firstSlider" style={{marginTop: settings.marginTop ,height: "70vh"}}>
            <SliderPlugin {...settings}>
                <div className="slider-1">
                    <FirstSlider/>
                </div>
                <div className="video"> 
                <iframe src="https://www.youtube.com/embed/2413zP_9DUM" frameborder="0" allowfullscreen></iframe>                </div>
            </SliderPlugin>
        </div>
    );
}

export default Slider;