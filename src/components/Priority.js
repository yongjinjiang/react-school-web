import React from 'react'
import PriorityBox from './PriorityBox'
import './style/Priority.scss'


const logoBar = require('../images/barLogo.png');

 const Priority = () =>{
     return(
        <div className="container history-component">
            
            <div className="row">
                <div className="col-md-12 priority-title">
                    <span>Prioridades</span>
                    <h1>Institucionales</h1>
                </div>  
                <img style={{margin:"auto"}}  src={logoBar}/>
            </div>
            <div className="clearfix"></div>
            <div className="row priority-container">
                    <PriorityBox title="Lorem Ipsum" subtitle="Lorem Ipsum"/>
                    <PriorityBox title="Lorem Ipsum" subtitle="Lorem Ipsum"/>
                    <PriorityBox title="Lorem Ipsum" subtitle="Lorem Ipsum"/>
                    <PriorityBox title="Lorem Ipsum" subtitle="Lorem Ipsum"/>
                    <PriorityBox title="Lorem Ipsum" subtitle="Lorem Ipsum"/>
                

            </div>
        </div>
     );
 }

export default Priority;