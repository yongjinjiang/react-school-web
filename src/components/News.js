import React from 'react'
import NewsCard from './NewsCard'
import useFetch from '../hooks/useFetch'
import './style/News.scss'

const News = () => {
    const [data, loading] = useFetch(
        "http://frontend.sistemaetna.com.ar/api/News?quantity=4"
      );
      
      return (
        <>
          {loading ? (
            <div className="container">
                <div className="loader"></div>
            </div>
          ) : (
            <div className="grid-noticias container">
              {data[0].News.map(item => (
                <NewsCard key={item.Id} type="news" info={item}/>
              ))}
            </div>
          )}
        </>
      );
    
}

export default News;