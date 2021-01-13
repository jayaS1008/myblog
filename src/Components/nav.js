import React from 'react';
import ReactDom from 'react-dom';
import {Component} from 'react';
import  '../styles/nav.css';
import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch 
  } from 'react-router-dom';

class Head extends React.Component{
    render(){
        return (
        <nav class="header">
            <ul >
            <Router> 
                  
            <Link to="/">
                <li class="navlist">Home</li>
            </Link>
             
            <Link to="/about">
                 <li class="navlist">About</li> 
            </Link> 

            </Router> 
                     
            </ul>
            
        </nav>
        );
        }
    }
    
    
    export default Head;