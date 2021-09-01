import React, { useState, useEffect} from 'react';
import axios from 'axios'

import HeroIndividualCard from './HeroIndividualCard'

const HeroIndividual = () => {
    const [individual, setIndividual] = useState("")
    useEffect(() => {
      axios
          .get(`https://akabab.github.io/superhero-api/api/id/${individual.id}.json`)
          .then(res => {
              console.log("second call", res.data)
              setIndividual(res.data)
          })
          .catch(err => console.log(err))
      }, [])

    return (
        <div>
            <h2>Some more info on these super folks</h2>
            {/* named the iterated item 'item' and not 'individual' to avoid reusing variable */}
            {individual.length > 0 && individual.map(item => (
            // cannot map over empty array, so characters.length > 0 checks to see if there are values in characters list
                <HeroIndividualCard key={item.id} individual={item}/>
            ))}
        </div>
    )
}

export default HeroIndividual;