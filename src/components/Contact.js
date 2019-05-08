import React from 'react'
import ContactForm from './ContactForm'
import logoContact from '../images/logoContact.png'

const Contact = () =>{
    return(
        <div>
            <div className="contact">
                <div className="container">
                        <div className="row">
                            <div className="col-md-12  p-0">
                                <h1>CONTACTO</h1>
                            </div>
                        </div>
                </div>
            </div>


            <div className="clearfix"></div>
            <div className="gray-gradient-inverse">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-5 conctactImage">
                            <img src={logoContact} alt="Colegio San Jose Cordoba"/>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt orci eu turpis malesuada, et commodo velit lacinia. Fusce accumsan ut mi a ornare. Mauris molestie fringilla nibh. Integer nec lorem velit. Curabitur pretium vestibulum risus, eu aliquam velit tempus vel. Morbi hendrerit turpis sed varius rutrum. Mauris posuere augue sed urna varius, ac tempor odio facilisis. Aliquam elit lectus, dictum et molestie eget, fringilla quis purus. 
                            </p>
                        </div>
                        <div className="col-md-12 col-lg-7">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );


}

export default Contact;