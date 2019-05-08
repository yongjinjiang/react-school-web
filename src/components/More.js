import React from 'react'
import {Link} from 'react-router-dom';
import './style/More.css'


const More = (props) =>{
    return(
        <div className="more-container">
            <Link to={props.Link}>
                <div className="float-right">
                    <div className="more">Ver Mas</div>
                    <div className="chevron"><i className="fas fa-chevron-right"></i></div>
                </div>
            </Link>
        </div>

    );
}

export default More;