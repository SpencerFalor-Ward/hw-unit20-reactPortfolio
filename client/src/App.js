import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "../src/components/header"
import Footer from "../src/components/footer"
import Portfolio from "../src/pages/portfolio"
import About from "../src/pages/about"
import Contact from "../src/pages/contact"
import TechSkills from "../src/pages/techSkills"



function App() {
  return (
    <div className="App container-fluid container-sm">
      <Router>
      <Header/>
        <Switch>
          <Route exact path={["/about","/", "/hw-unit20-reactPortfolio"]}>
            <About />
          </Route>
          <Route  path="/contact">
            <Contact />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/techSkills">
            <TechSkills />
          </Route>
        </Switch>
    </Router>
      <Footer/>
    </div>
  );
}

export default App;
