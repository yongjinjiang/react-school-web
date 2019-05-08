import React from 'react'
import SliderPlugin from "react-slick";

import './style/SliderBoxBar.scss'

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3
  };

const SliderBoxBar = () =>{
    return (
        <div className="SliderBoxBar">
            <SliderPlugin {...settings}>
                <img className="float-left"  src="https://dummyimage.com/250x250/919191/000000.jpg"/>
                <img className="float-left"  src="https://dummyimage.com/250x250/919191/000000.jpg"/>
                <img className="float-left"  src="https://dummyimage.com/250x250/919191/000000.jpg"/>
                <img className="float-left"  src="https://dummyimage.com/250x250/919191/000000.jpg"/>
                <img className="float-left"  src="https://dummyimage.com/250x250/919191/000000.jpg"/>
                <img className="float-left"  src="https://dummyimage.com/250x250/919191/000000.jpg"/>
                <img className="float-left"  src="https://dummyimage.com/250x250/919191/000000.jpg"/>
                <img className="float-left"  src="https://dummyimage.com/250x250/919191/000000.jpg"/>
                <img className="float-left"  src="https://dummyimage.com/250x250/919191/000000.jpg"/>
                <img className="float-left"  src="https://dummyimage.com/250x250/919191/000000.jpg"/>
                <img className="float-left"  src="https://dummyimage.com/250x250/919191/000000.jpg"/>
                <img className="float-left"  src="https://dummyimage.com/250x250/919191/000000.jpg"/>
            </SliderPlugin>
        </div>
    );
}
export default SliderBoxBar;