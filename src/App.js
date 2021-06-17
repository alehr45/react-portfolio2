import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
 
    </Router>
    
  );
}

export default App;
