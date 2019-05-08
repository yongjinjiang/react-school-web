import React from 'react'
import More from './More'

import './style/Info.css'

const InfoItem = (props) => {
    return(
        <div className="col-md-12 float-left">
            <div className="col-md-2 float-left infoitem-number">
                    {props.number}
                </div>
            <div className="col-md-6 infoitem float-left">
                    <h1>Lorem Ipsum</h1>
                    <h2>Lorem Ipsum</h2>
            </div>
            <div className="col-md-4 float-left">
                    <More Link="/nuestra-historia"/>
                </div>
            <div className="clearfix"></div>
        </div>


    );
}
export default InfoItem;