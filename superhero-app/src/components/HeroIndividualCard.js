import React from "react";

const HeroIndividualCard = ({ individual }) => {
  console.log("individual", individual);
  return (
    <div className="individual-card">
      <h2>{individual.name}</h2>
      <img className="individual-img" src={individual.images.lg} />
      <div className="individual-info">
        <h2>Power Stats!</h2>
        <h3>Combat: {individual.powerstats.intelligence}</h3>
        <h3>Durability: {individual.powerstats.strength}</h3>
        <h3>Intelligence: {individual.powerstats.speed}</h3>
        <h3>Power: {individual.powerstats.durability}</h3>
        <h3>Speed: {individual.powerstats.power}</h3>
        <h3>Stength: {individual.powerstats.combat}</h3>
      </div>
    </div>
  );
};

export default HeroIndividualCard;
