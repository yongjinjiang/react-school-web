import React from 'react'
import logoSlider from '../images/logo.png'
import textSlider from '../images/textPrincipal.png'
import {Button} from 'react-bootstrap';
import './style/FirstSlider.scss'

const firstSlider = () =>{
    return (
        <div className="container firstSlider">
            <div className="row">
                <div className="col-md-4 float-left logo">
                    <img style={{margin: "auto"}} src={logoSlider}/>
                </div>
                <div className="col-md-8 float-left">
                    <img style={{margin: "auto"}} src={textSlider}/>
                </div>
                <div style={{width:"100%", margin:"auto", textAlign:"center", marginTop:"50px", marginBottom:"50px"}}>
                    <Button variant="light" size="lg" style={{marginRight:"50px", fontFamily:"'Roboto', sans-serif"}}>ACCESO FAMILIAS</Button>
                    <Button variant="danger" size="lg" style={{marginleft:"50px", fontFamily:"'Roboto', sans-serif"}}>ACCESO ALUMNOS</Button>
                </div>
            </div>
        </div>
    );
};

export default firstSlider;