import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <h2>Superhero Database</h2>
        <div className="warmachine">
          <p>"We're all about that Superhero life"</p>
          <p>- War Machine</p>
        </div>
      </div>
      <div className="hero-categories">
        <div className="everyHero">
          <h3>
            A quick overview of every character, good and bad, in the Marvel and
            DC universe
          </h3>
          <Link to="/hero-list">
            <button>Heros and Villians</button>
          </Link>
        </div>
        <div className="marvel">
          <h3>Everything Marvel</h3>
          <Link to="/hero-list">
            <button>Marvel</button>
          </Link>
        </div>
        <div className="dc">
          <h3>Everything DC</h3>
          <Link to="/hero-list">
            <button>DC</button>
          </Link>
        </div>
        <div className="everyHero">
          <h3>
            The good guys
          </h3>
          <Link to="/hero-list">
            <button>Superheros</button>
          </Link>
        </div>
        <div className="everyHero">
          <h3>
            The bad guys
          </h3>
          <Link to="/hero-list">
            <button>Super Villians</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
