import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import News from './News'
import Login from './Login'

class App extends Component{

    state = {
        isLogged : false,
    }


    logIn = () => {
        this.setState({
            isLogged : true
        })
    }

    render(){
        return(
            <Router>
                <React.Fragment>
                <Header />
                <Route exact path="/" />
                <Route path="/news" component={News} />
                <Route path="/profile"
                       render = {() => <Login isLogged = {this.state.isLogged}  logIn = {this.logIn}/>}

                />
                </React.Fragment>
            </Router>
        )
    }
}


export default App;
