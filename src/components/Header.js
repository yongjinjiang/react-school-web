import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Link as Anchor, animateScroll as scroll } from "react-scroll";

import './style/Header.css'


const Header = () => {
    return(
        <div style={{background:"#F8F9FA"}}>
            <div className="container" >
                <Navbar bg="light" id="navbar-header">
                    <div id="navbarLinks">
                        <Link to='/'> Inicio</Link>
                        <Anchor
                            activeClass="active"
                            to="historia"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        > Historia </Anchor>
                        <Anchor
                            activeClass="active"
                            to="prioridades"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        > Prioridades Inst. </Anchor>
                        <Anchor
                            activeClass="active"
                            to="noticias"
                            spy={true}
                            smooth={true}
                            offset={-20}
                            duration= {500}
                        > Noticias </Anchor>
                        <Anchor
                            activeClass="active"
                            to="informacion"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        > Informacion </Anchor>
                        <Anchor
                            activeClass="active"
                            to="escuela"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        > Nuestra Escuela </Anchor>
                        <Link to='/Niveles'> Niveles</Link>
                        
                    </div>
                </Navbar>
            </div>
        </div>
    );
}


export default Header;