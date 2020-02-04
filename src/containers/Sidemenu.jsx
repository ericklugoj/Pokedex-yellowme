import React, { useState, useEffect } from "react";
import { MenuContainer } from "../components/MenuContainer";
import { MenuItem } from "../components/MenuItem";
import axios from "axios";

export const Sidemenu = ({ handlePokemon }) => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(1);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=150"
      );

      const { results } = response.data;

      setPokemons(results);
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    handlePokemon(selectedPokemon);
  }, [selectedPokemon, handlePokemon]);

  function getPokemonId({ url }) {
    const id = url.split("/").reverse();
    return Number(id[1]);
  }

  return (
    <MenuContainer>
      {pokemons.map(pokemon => (
        <MenuItem
          key={getPokemonId(pokemon)}
          id={getPokemonId(pokemon)}
          name={pokemon.name}
          select={getPokemonId(pokemon) === selectedPokemon ? true : false}
          onClick={() => {
            setSelectedPokemon(getPokemonId(pokemon));
          }}
        />
      ))}
    </MenuContainer>
  );
};
