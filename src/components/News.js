import React from 'react'
import NewsCard from './NewsCard'
import useFetch from '../hooks/useFetch'
import './style/News.scss'

const News = () => {
    const [data, loading] = useFetch(
        "https://next.json-generator.com/api/json/get/NJ9cu8fp8"
      );
   
      return (
        <>
          {loading ? (
            <div className="container">
                <div className="loader"></div>
            </div>
          ) : (
            <div className="grid-noticias container">
              {data.map(item => (
                <NewsCard key={item._id} type="news" info={item}/>
              ))}
            </div>
          )}
        </>
      );
    
}

export default News;