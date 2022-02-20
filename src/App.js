import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact component={HeroSection} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
