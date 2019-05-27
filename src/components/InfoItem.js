import React from 'react'
import More from './More'

import './style/Info.scss'

const InfoItem = (props) => {
    return(
        <div className="col-md-12 float-left">
            <div className="col-sd-2 col-md-2 col-lg-2 float-left infoitem-number">
                    {props.number}
                </div>
            <div className="col-md-6 infoitem float-left">
                    <h1>Lorem Ipsum</h1>
                    <h2>Lorem Ipsum</h2>
            </div>
            <div className="col-md-4 float-left info-link">
                    <More Link="#"/>
                </div>
            <div className="clearfix"></div>
        </div>


    );
}
export default InfoItem;