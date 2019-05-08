import React from 'react'

const SchoolCard = (props) =>{
    return(
        <div>
            <img src={props.background}/>
            <p><span>{props.title}</span></p>
        </div>
    );
}

export default SchoolCard;