import React from 'react'
import Header from './Header';
import useFetch from '../hooks/useFetch'
import Footer from './Footer'
import './style/Post.scss';


const Post = (props) => {

    const pathname = (props.location.pathname).split("/");


    const [data, loading] = useFetch(
        "http://api.sistemaetna.com.ar/api/News/Detail?id=73&quantity=1"
    );
    console.log("Data:", data)
    return (
        <div>
            <Header />
            <div className="clearfix"></div>
            <div className="redBanner">
                <div className="postContainer container">
                <i className="fas fa-chevron-right"></i>
                <h1>Ver Mas</h1>
                </div>
            </div>
            <div className="container postBody">
                {loading ?
                    (<div className="container">
                        <div className="loader"></div>
                    </div>)
                    :
                    (<>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h1>{data.Title}</h1>
                            <p>{data.Content}</p>
                        </div>
                        <div className="col-sm-12 col-md-6 postImage">
                            <img src={data.ImageUrl}/>
                        </div>
                    </div>
                        
                    </>
                    )
                }
            </div>
            <section id="footer">
                <Footer />
            </section>
        </div>


    );
}

export default Post;

