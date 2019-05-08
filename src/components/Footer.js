import React from 'react'
import logoFooter from '../images/logoFooter.png'
import './style/Footer.scss'

const Footer = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-4 text-center">
                    <img src={logoFooter} alt="Colegio San Jose"/>    
                </div>
                <div className="col-md-12 col-lg-4 footer-items">
                    <ul>
                        <li><i class="fas fa-phone-volume"></i> 0351 4647594</li>
                        <li><i class="fas fa-map-marker-alt"></i> LOREM IMPSUM</li>
                    </ul>
                </div>
                <div className="col-md-12 col-lg-4 etna-footer">
                    <div>
                        <p>DESARROLLADO POR</p>
                        <p>© ETNA / www.etnaeducacion.com.ar</p>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Footer;