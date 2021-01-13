import logo from './logo.svg';
import './App.css';

import Head from './Components/nav';
import Home from './Components/home';
import About from './Components/about';
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch,
  Redirect
} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Home/>
                

    </div>
    // <Router>
    // <div className="App">
    /* <ul> 
        <Link to="/">
        <li class="navlist">Home</li>
        </Link> 
        <br/>
        <br/>
        <Link to="/about">
        <li class="navlist">About</li> 
       </Link>
       <Link to="/skills">
        <li class="navlist">skills</li> 
       </Link>
       <Link to="/contact">
        <li class="navlist">Contact</li> 
       </Link> 
    </ul>  */
  /* <switch>
    <Route exact path='/' component={Home}></Route> 
    <Route exact path='/about' component={About}></Route> 
    <Route exact path='/skills' component={Head}></Route> 
    <Route exact path='/intro' component={Head}></Route> 
    <Route exact path='/contact' component={Head}></Route> 
    </switch>

      </div>
    </Router> */
    
  );
}


export default App;
