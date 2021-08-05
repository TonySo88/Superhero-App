import React from 'react'

const HeroIndividualCard = ({ character }) => {
    return(
        <div>
            <h2>Character: {character.name}</h2>
            <h3>Full name: {character.biography.fullName}</h3>
            <h3>Alignment: {character.biography.alignment}</h3>
        </div>
    )
}

export default HeroIndividualCard