import React from 'react'
import HeroIndividualCard from './HeroIndividualCard'

const HeroIndividual = ({ characters }) => {
    return (
        <div>
            <h2>Hello World</h2>
            {characters.length > 0 && characters.map(character => (
                <HeroIndividualCard key={character.id} character={character} />
            ))}
        </div>
    )
}

export default HeroIndividual;