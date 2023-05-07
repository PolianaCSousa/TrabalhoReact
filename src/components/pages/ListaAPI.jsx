import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListaAPI (props){
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=5')
             .then(poke => {setPokemon(poke.data.results);})
    });

    return(
        <>
            <h1>{props.name}</h1>
            <ul>
                {pokemon.map(p => (
                <p key={p.name}>{p.name}</p>
                ))}
            </ul>
        </>
    )
}
  

export default ListaAPI