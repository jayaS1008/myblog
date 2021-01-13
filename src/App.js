import logo from './logo.svg';
import './App.css';
import Nav from './Components/nav';
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
      <Nav/>
    </div>
  );
}
export default App;
