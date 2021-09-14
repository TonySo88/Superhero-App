import React from 'react'

const MarvelCard = ({ character }) => {
    return (
        <div>
            <h2>{character.name}</h2>
            <h2>{character.biography.publisher}</h2>
        </div>
    )
}

export default MarvelCard;