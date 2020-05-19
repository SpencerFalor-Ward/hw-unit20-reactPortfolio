import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "../src/components/header"
import Footer from "../src/components/footer"
import Portfolio from "../src/pages/portfolio"
import About from "../src/pages/about"
import Contact from "../src/pages/contact"

function App() {
  return (
    <div className="App container-fluid container-sm">
      <Router>
      <Header/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
    </Router>
      <Footer/>
    </div>
  );
}

export default App;
