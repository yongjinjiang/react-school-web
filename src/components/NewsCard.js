import React from 'react'
import './style/NewsCard.scss';  
import BaseSettings from '../Constants'




const NewsCard = (props) =>{
    return(
        <div className="col-lg-6 col-md-12 float-left newsCard">
            <div>
                <img className="news-Image" src={BaseSettings.DIR_PATH + props.info.ImageUrl} />
            </div>
            <div className="p-0 col-md-12 newsTitleBorder">
                <div className="col-md-2 float-left">
                    <i className="fas fa-newspaper"></i>
                </div>
                <div className="col-md-10 text-news float-left">
                    <h1>{props.info.Title}</h1>
                    <h4>{props.info.Date}</h4>
                </div>
            </div>

        </div>    
    );
}

export default NewsCard;