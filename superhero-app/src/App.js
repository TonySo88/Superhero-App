import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios'

import './App.css';
import Home from './components/Home';
import HeroList from './components/HeroList'
import HeroIndividual from './components/HeroIndividual'

function App() {

  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/hero-individual/:id">
          <HeroIndividual/>
        </Route>
        <Route path="/hero-list">
          <HeroList />
        </Route>
      </div>
    </Router>
  );
}

export default App;