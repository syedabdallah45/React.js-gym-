
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'
// import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
    
  
        
        <Switch>
          <Route path='/' exact component={Home} />
          <Route exact path='/about'  component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
  
        </Router>
    
      
      

    </div>
  );
}

export default App;
