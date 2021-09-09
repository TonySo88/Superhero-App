import React from "react";

const HeroIndividualCard = ({ individual }) => {
  // FIGURE OUT AVERAGE TO GET TOTAL POWER STAT FIGURE
  // POWER STAT IS A KEY VALUE PAIR WITH THE VALUE BEING A NUMBER
  function getAvg(stats) {
    let total = 0;
    for (let i = 0; i < stats.length; i++) {
      total += Number(stats[i])
    }

    let avg = total / stats.length
    console.log("average", avg)
    return avg
  }

  return (
    <div className="individual-card">
      <img className="individual-img" src={individual.images.lg} />
      <div className="individual-info">
        <h2>Some more info on:</h2>
        <h2>{individual.name}</h2>
        <h2>Power Stats!</h2>
        <h3>Combat: {individual.powerstats.intelligence}</h3>
        <h3>Durability: {individual.powerstats.strength}</h3>
        <h3>Intelligence: {individual.powerstats.speed}</h3>
        <h3>Power: {individual.powerstats.durability}</h3>
        <h3>Speed: {individual.powerstats.power}</h3>
        <h3>Strength: {individual.powerstats.combat}</h3>
        <h3>Average: {getAvg(individual.powerstats)}</h3>
      </div>
    </div>
  );
};

export default HeroIndividualCard;
