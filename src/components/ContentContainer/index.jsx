import React from "react";
import { LoadingDiv, ContentDiv } from "./styles";
import { PokemonDetails } from "../PokemonDetails";
import LoadingPokemon from "../../assets/loading.gif";

// const loadedPokemon = {
//   id: "64",
//   name: "rhydon",
//   types: [
//     {
//       type: "ground"
//     },
//     {
//       type: "rock"
//     }
//   ]
// };
export const ContentContainer = ({ isLoading, pokemon }) => {
  if (isLoading) {
    return (
      <LoadingDiv>
        <img src={LoadingPokemon} alt="" width="50%" />
      </LoadingDiv>
    );
  }
  return (
    <ContentDiv>
      <PokemonDetails pokemon={pokemon} />
    </ContentDiv>
  );
};
