import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   
      <Router>
        <div className="App" >
          <NavBar />
          <Switch>
          <Home />
            {/* <Route path="/signup" component={Signup} /> 
            <Route path="/profile" component={Profile} /> 
            <Route path="/BookingA" component={BookingA} /> 
            <Route path="/login" component={Login} />
            <Route path="/jobs"  component={Jobs} />
            <Route path="/" component={Home} /> */}
            
          </Switch>
          
        </div>
        
      </Router>
     
  
    
  );
 
}

export default App;
