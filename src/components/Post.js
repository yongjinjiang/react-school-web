import React from 'react'
import Header from './Header';
import useFetch from '../hooks/useFetch'
import Footer from './Footer'
import './style/Post.scss';


const Post = (props) =>{
    
    const pathname = (props.location.pathname).split("/");
    

    const [data, loading] = useFetch(
        "https://next.json-generator.com/api/json/get/EyDse5L0U"
      );
    return(
        <div>
            <Header/>
            <div className="clearfix"></div>
            <div className="postContainer">
                <div className="wave">
                    <div className="container">
                        
                        <h1><i className="fas fa-chevron-right"></i> Ver mas</h1>
                    </div>
                </div>
            </div>
            <div className="container postBody">
                    {loading ? 
                        (<div className="container">
                            <div className="loader"></div>
                        </div>)
                        :
                        (<>
                            <h1>{data[0].title}</h1>
                            <p>{data[0].content}</p>
                        </>
                        )
                }
            </div>
            <section id="footer">
                    <Footer/>
               </section>
        </div>
        

    );
}

export default Post;

