import React, { useState, useEffect} from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';

import HeroIndividualCard from './HeroIndividualCard'

const HeroIndividual = () => {
    const { id } = useParams();
    const [individual, setIndividual] = useState([])
    useEffect(() => {
        console.log("id", id)
      axios
          .get(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
          .then(res => {
              console.log("second call", res.data)
              setIndividual([res.data])
          })
          .catch(err => console.log(err))
      }, [])

    return (
        <div>
            {console.log("here", individual, individual.length)}
            {/* <h2>Some more info on:</h2> */}
            {/* named the iterated item 'item' and not 'individual' to avoid reusing variable */}
            {individual.length > 0 && individual.map(item => (
            // cannot map over empty array, so characters.length > 0 checks to see if there are values in characters list
                <HeroIndividualCard key={item.id} individual={item}/>
            ))}
        </div>
    )
}

export default HeroIndividual;