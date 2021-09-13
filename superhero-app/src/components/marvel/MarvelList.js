import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MarvelCard from './MarvelCard'

const MarvelList = () => {
    const [marvelChars, setMarvelChars] = useState([])

    useEffect(() => {
        axios
            .get("https://akabab.github.io/superhero-api/api/all.json")
            .then(res => {
                res.data.filter(character => {
                    character.biography.publisher === "Marvel Comics"
                    return character
                })

                return setMarvelChars
            })
            .catch(err => console.log(err))
    }, [])

    // function marvelFilter(marvelChars) {
    //     if (marvelChars === res.data.biography.publisher === "Marvel Comics")
    //     return marvelChars
    // }
    
    return (
        <div>
            <h2>Component: Marvel</h2>
            {marvelChars.length > 0 && marvelChars.map(character => (
                <MarvelCard key={character.id} character={character}/>
            ))}
        </div>
    )
}

export default MarvelList;