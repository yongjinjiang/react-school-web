import React from 'react'
import NewsCard from './NewsCard'
import Noticias from '../data'
import './style/News.scss'


class News extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            news: []
        }
    }

    componentDidMount(){
        setTimeout( () => {
            this.setState({news: JSON.parse(Noticias)})
            console.log(JSON.parse(Noticias))
        },2000)
        
    }
    render(){
        
        return(
            <section id="noticias">
                <div className="container noticias">
                    <div className="section-title">
                        <h1>Noticias</h1>
                    </div>
                    <div className="ribbon"></div>
                    <div className="row">

                        <div className="clearfix"></div>
                        <div className="col-md-12">
                            {this.state.news.length === 0 ? <p>Loading...</p> : this.state.news.map(item =>
                                <NewsCard info={item}/>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );

    }
    
}

export default News;