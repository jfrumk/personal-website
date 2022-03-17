import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import AboutMe from "./views/AboutMe";
import Contact from "./views/Contact";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about-me" exact component={AboutMe} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
