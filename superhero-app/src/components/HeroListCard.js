import React from 'react'
import { Link } from 'react-router-dom'

const HeroListCard = ({ character }) => {
    return(
        <div className="hero-list">
            <img className="character-img" src={character.images.sm} />
            <div className="character-info">
                <h2>Character: {character.name}</h2>
                <h3>Full name: {character.biography.fullName}</h3>
                <h3>Alignment: {character.biography.alignment}</h3>
                <h3>Publisher: {character.biography.publisher}</h3>
                <h3>
                    <Link to="/hero-individual">More Info</Link>
                </h3>
            </div>
        </div>
    )
}

export default HeroListCard