import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Link as Anchor, animateScroll as scroll } from "react-scroll";

import './style/Header.css'


const Header = () => {
    return(
        <div style={{background:"#F8F9FA"}}>
            
                <Navbar collapseOnSelect expand="lg" bg="light" id="navbar-header" fixed="top">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <div className="container" >
                    <div id="navbarLinks">
                        <Anchor
                            activeClass="active"
                            to="/"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        > Inicio </Anchor>
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
                    </div>

                
                </Navbar.Collapse>
                </Navbar>
            
        </div>
    );
}


export default Header;