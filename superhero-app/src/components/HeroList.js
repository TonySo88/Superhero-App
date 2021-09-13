import React, { useState, useEffect } from 'react'
import axios from 'axios'

import HeroListCard from './HeroListCard'

const HeroList = () => {
    const [characters, setCharacters] = useState("")
    useEffect(() => {
      axios
          .get("https://akabab.github.io/superhero-api/api/all.json")
          .then(res => {
              console.log("first call", res.data)
              setCharacters(res.data)
          })
          .catch(err => console.log(err))
      }, [])

    return (
        <div>
            <h2>Component: Hero List</h2>
            {characters.length > 0 && characters.map(character => (
                <HeroListCard key={character.id} character={character} />
            ))}
        </div>
    )
}

export default HeroList;