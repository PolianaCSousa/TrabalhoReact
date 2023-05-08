import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListaAPI (props){
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async () => {
            const pokemonNames = ["pikachu", "charizard", "squirtle", "bulbasaur", "mewtwo"];
            const promises = pokemonNames.map(async (name) => {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                const { abilities } = response.data;
                return { name, abilities };
            });
            const results = await Promise.all(promises);
            setPokemons(results);
        };
        getPokemons(); }, []);
  
    return (
      <div>
        <h1>Dados da APi</h1>
        {pokemons.map((pokemon, index) => (
          <div key={index}>
            <h2>{pokemon.name}</h2>
            <ul>
              {pokemon.abilities.map((ability, index) => (
                <li key={index}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
}
  

export default ListaAPI