import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import './style/App.css';   

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/nuestra-historia" exact component={Post}></Route>
                        <Route 
                            path="/noticia/:id" 
                            exact component={Post}
                        ></Route>

                    </Switch>

                </BrowserRouter>
            </div>

        );
            
        
    }
}

export default App;