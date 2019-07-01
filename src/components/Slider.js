import React from 'react'
import SliderPlugin from "react-slick";
import FirstSlider from './FirstSlider';
import ReactPlayer from 'react-player'
import './style/Slider.scss';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
}


var settings = {
    dots: true,
    dotsClass: "customDots",
    infinite: true,
    marginTop: "72px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

const Slider = () =>{
    return(
        <div className="gray-gradient firstSlider" style={{marginTop: settings.marginTop ,height: "70vh"}}>
            <SliderPlugin {...settings}>
                <div className="slider-1">
                    <FirstSlider/>
                </div>
                <div className="video">
                <ReactPlayer url='https://www.youtube.com/watch?v=tNkZsRW7h2c'  width="100%" height="70vh"/>
                </div>
                
            </SliderPlugin>
        </div>
    );
}

export default Slider;