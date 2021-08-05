import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios'

import './App.css';
import Home from './components/Home';
import HeroList from './components/HeroList'
import HeroIndividual from './components/HeroIndividual'

function App() {
  const [characters, setCharacters] = useState("")
  useEffect(() => {
    axios
        .get("https://akabab.github.io/superhero-api/api/all.json")
        .then(res => {
            console.log(res.data)
            setCharacters(res.data)
        })
        .catch(err => console.log(err))
    }, [])

  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/hero-card">
          <HeroList characters={characters}/>
        </Route>
        <Route path="/hero-individual">
          <HeroIndividual characters={characters}/>
        </Route>
      </div>
    </Router>
  );
}

export default App;