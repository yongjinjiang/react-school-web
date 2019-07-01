import React from 'react'
import './style/NewsCard.scss';  
import { Link } from 'react-router-dom';


const NewsCard = (props) =>{
    return(
        <div className="newsCard">
                <img className="news-Image" src={props.info.ImageUrl} />
            <div className="p-0 col-md-12 newsTitleBorder">
                <div className="col-md-2 float-left newsIcon">
                    <i className="fas fa-newspaper"></i>
                </div>
                <Link to={{
                    pathname:'/noticia/'+ props.info.Id,
                }}>
                    <div className="col-md-10 text-news float-left">
                        <h1>{props.info.Title}</h1>
                        <h4>{props.info.Date}</h4>
                    </div>
                </Link>
            </div>
        </div>    
    );
}
export default NewsCard;