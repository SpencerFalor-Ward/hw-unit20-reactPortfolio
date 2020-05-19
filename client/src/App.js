import React from 'react';
import {BroweserRouter as Router, Switch, Route} from "react-router-dom"
import  Header from "../src/components/header"
import  Footer from "../src/components/footer"
import Portfolio from "../pages/portfolio"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
      <Footer/>
    </div>
  );
}

export default App;
