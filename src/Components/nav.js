import React from 'react';
import ReactDom from 'react-dom';
import {Component} from 'react';
import  '../styles/nav.css';
import Home from './home';
import About from './about';
import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch,
    NavLink, 
  } from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return (
             
            <nav>
            <ul >
             <Router>
                 <div class="header">
                 <Link to="/" ><li class="navlist">Home</li></Link> 
                 <Link to="/about"><li class="navlist">About</li> </Link>
                 <Link to="/skills" ><li class="navlist">Skills</li></Link> 
                 <Link to="/contact" ><li class="navlist">Contact</li></Link> 
                 <Link to="/login" ><li class="navlist"><button class="login">Login</button></li></Link>
                 <Link to="/signup" ><li class="navlist"><button class="sign">SignUp</button></li></Link> 
                 </div>
             <Switch>
             <Route exact path='/' component={Home}></Route> 
             <Route exact path='/about' component={About}></Route> 
             {/* <Route exact path='/skills' component={Skills}></Route> 
             <Route exact path='/contact' component={Contact}></Route>  */}
             </Switch>
    
                
            </Router> 
            </ul>
             </nav>       
           
        );
        }
    }
    
    
    export default Nav;