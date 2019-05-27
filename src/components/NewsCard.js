import React from 'react'
import './style/NewsCard.scss';  
import BaseSettings from '../Constants'




const NewsCard = (props) =>{
    return(
        <div className="newsCard">
            
                <img className="news-Image" src={props.info.ImageUrl} />
            
            <div className="p-0 col-md-12 newsTitleBorder">
                <div className="col-md-2 float-left newsIcon">
                    <i className="fas fa-newspaper"></i>
                </div>
                <div className="col-md-10 text-news float-left">
                    <h1>{props.info.title}</h1>
                    <h4>{props.info.date}</h4>
                </div>
            </div>

        </div>    
    );
}

export default NewsCard;