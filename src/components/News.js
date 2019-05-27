import React, {useEffect, useState} from 'react'
import NewsCard from './NewsCard'
import axios from 'axios';
import {newsOne as Noticias} from '../data';
import faker from 'faker';
import './style/News.scss'


  function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    async function fetchUrl() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    useEffect(() => {
      fetchUrl();
    }, []);
    return [data, loading];
  }

const News = () => {
    const [data, loading] = useFetch(
        "https://next.json-generator.com/api/json/get/NJ9cu8fp8"
      );
      return (
        <>
         
          {loading ? (
            "Loading..."
          ) : (
            <div className="grid-noticias container">
              {data.map(item => (
                <NewsCard  key={item._id} info={item}/>
              ))}
            </div>
          )}
        </>
      );
    
}

export default News;