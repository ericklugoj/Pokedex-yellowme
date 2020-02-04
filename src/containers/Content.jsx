import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContentContainer } from "../components/ContentContainer";

export const Content = ({ pokemonId }) => {
  const [loadingPokemon, setLoadingPokemon] = useState(true);
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    setLoadingPokemon(true);
    const fetchPokemon = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
      );
      const data = await response.data;

      setPokemon(data);
      setLoadingPokemon(false);
    };

    fetchPokemon();
  }, [pokemonId]);

  return <ContentContainer isLoading={loadingPokemon} pokemon={pokemon} />;
};
