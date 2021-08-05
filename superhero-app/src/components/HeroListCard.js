import React from 'react';

const HeroListCard = ({ character }) => {
    return (
        <div>
            <h2>Character: {character.name}</h2>
        </div>
    )
}

export default HeroListCard