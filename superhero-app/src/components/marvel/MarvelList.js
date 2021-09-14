import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MarvelCard from './MarvelCard'

const MarvelList = () => {
    const [marvelChars, setMarvelChars] = useState([])

    useEffect(() => {
        axios
            .get("https://akabab.github.io/superhero-api/api/all.json")
            .then(res => {
                console.log("marvel call", res.data)
                setMarvelChars(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    
    return (
        <div>
        <h2>Component: Marvel</h2>
        {marvelChars.length > 0 && marvelChars.filter(character => {
            if (character.biography.publisher === "Marvel Comics")
                return character
        }).map(character => (
            <MarvelCard key={character.id} character={character}/>
        ))}
        </div>
    )
}

export default MarvelList;