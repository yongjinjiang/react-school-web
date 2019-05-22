import React from 'react'
import NewsCard from './NewsCard'
import {newsOne as Noticias} from '../data';
import faker from 'faker';
import './style/News.scss'


const generator = (schema, min = 1, max) => {
    max = max || min
    return Array.from({ length: faker.random.number({ min, max }) }).map(() => Object.keys(schema).reduce((entity, key) => {
      entity[key] = faker.fake(schema[key])
      return entity
    }, {}))
  }

  const clientsSchema = {
    ImageUrl: '{{image.imageUrl}}',
    Title: 'Lorem Ipsum',
    Date: '21/02/2015'
  }
  


class News extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            news: []
        }
    }

    componentDidMount(){
        setTimeout( () => {
            this.setState({news: generator(clientsSchema, 4, 4)})
        },2000)
        
    }
    render(){
        
        return(
             <div className="grid-noticias container">
                {this.state.news.length === 0 ? <p>Loading...</p> : this.state.news.map(
                    item =>
                        <NewsCard  key={Math.random()} info={item}/>
                    )
                }
             </div>
        );

    }
    
}

export default News;