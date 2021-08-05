import React from 'react';
import HeroListCard from './HeroListCard'

const HeroList = ({ characters }) => {

    return (
        <div>
            <h2>A list of all superheroes and villains</h2>
            {characters.length > 0 && characters.map(character => (
            // cannot map over empty array, so characters.length > 0 checks to see if there are values in characters list
                <HeroListCard key={character.id} character={character}/>
            ))}
        </div>
    )
}

export default HeroList;