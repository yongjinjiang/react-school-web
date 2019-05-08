import React from 'react'
import InfoItem from './InfoItem'


const Info = () => {
    return (
        <div>
            <div className="container text-center info-block">
            <div className="section-title">
                <h1>Informacion</h1>
            </div>
            <div className="ribbon"></div>

            <div className="row">
                <div className="col-md-3 float-left newsImage">
                    <img src="https://www.lexiconn.in/wp-content/themes/lexiconn/images/project-report-writing-img.jpg" alt="news"/>
                </div>
                <div className="col-md-9 float-left">
                    <InfoItem number="1"/>
                    <InfoItem number="2"/>
                    <InfoItem number="3"/>
                    <InfoItem number="4"/>
                </div>

            </div>

        </div>

        </div>

    );
}

export default Info;