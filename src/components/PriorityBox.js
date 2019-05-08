import React from 'react'

const PriorityBox = (props) =>{
    return(
        <div>
            <div className="circle"><i className="fas fa-chalkboard-teacher"></i></div>
            <div className="priorityBox roboto">
                <h1>{props.title}</h1>
                <span>{props.subtitle}</span>
            </div>
        </div>
    );
}

export default PriorityBox;