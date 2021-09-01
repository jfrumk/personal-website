import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component= {HeroSection}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
