import React from 'react';

const HeroIndividualCard = ({ individual }) => {
    return (
        <div>
             <h2>Character: {individual.name}</h2>
             <h3>{individual.powerstats.intelligence}</h3>
             <h3>{individual.powerstats.strength}</h3>
             <h3>{individual.powerstats.speed}</h3>
             <h3>{individual.powerstats.durability}</h3>
             <h3>{individual.powerstats.power}</h3>
             <h3>{individual.powerstats.combat}</h3>
        </div>
    )
}

export default HeroIndividualCard