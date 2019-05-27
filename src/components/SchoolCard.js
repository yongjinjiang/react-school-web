import React from 'react'

const SchoolCard = (props) =>{
    return(
        <div className="schoolCard">
            <img src={props.background}/>
            <p><span>{props.title}</span></p>
        </div>
    );
}

export default SchoolCard;