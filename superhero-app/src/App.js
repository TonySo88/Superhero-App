import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import HeroList from './components/HeroList'
import HeroIndividual from './components/HeroIndividual'
import MarvelList from './components/marvel/MarvelList'

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
        <Route path="/marvel-list">
          <MarvelList />
        </Route>
      </div>
    </Router>
  );
}

export default App;