import React from 'react'
import SliderPlugin from "react-slick"
import './style/Aliances.scss'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 5,
    responsive:[
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
              
        }
    ]
  };

const Aliances = () =>{
    return(
        <div className="container aliances">
                <div className="aliance-title">
                    <h1>Alianzas Estrategicas</h1>
                </div>
                <div className="ribbon"></div>
                <SliderPlugin {...settings} >
                    <img src="http://pngimg.com/uploads/car_logo/car_logo_PNG1648.png" />
                    <img src="https://www.interbrand.com/assets/00000001487.png" />
                    <img src="http://www.drivenbrands.com/dist/img/sliders/history/driven_logo.png"/>
                    <img src="http://pngimg.com/uploads/car_logo/car_logo_PNG1648.png" />
                    <img src="https://www.interbrand.com/assets/00000001487.png" />
                    <img src="http://www.drivenbrands.com/dist/img/sliders/history/driven_logo.png"/>
                    <img src="http://pngimg.com/uploads/car_logo/car_logo_PNG1648.png" />
                    <img src="https://www.interbrand.com/assets/00000001487.png" />
                    <img src="http://www.drivenbrands.com/dist/img/sliders/history/driven_logo.png"/>
                    <img src="http://pngimg.com/uploads/car_logo/car_logo_PNG1648.png" />
                    <img src="https://www.interbrand.com/assets/00000001487.png" />
                    <img src="http://www.drivenbrands.com/dist/img/sliders/history/driven_logo.png"/>
                </SliderPlugin>

        </div>


    );


} 
export default Aliances;