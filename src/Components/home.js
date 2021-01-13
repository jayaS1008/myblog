import React from 'react';
import ReactDom from 'react-dom';
import {Component} from 'react';
import logo from '../styles/home.css';
import Head from './nav.js'
import About from './about'
import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch,
    HashRouter,
  } from 'react-router-dom'; 
    class Home  extends React.Component
  {
    render(){
        return(
            <div>
                 <Head/>
                 Welcome Guest!
                 <Router>
                
                    <Route exact path ='/' component={Home}> </Route>
                    <Route exact path='/about' component={About}></Route> 
                    

                
                 </Router>
            </div>
        )
    }

}

export default Home;