import React from "react";
import { ItemContainer, PokemonId, PokemonName } from "./styles";

export const MenuItem = ({ id, name, select, onClick }) => {
  return (
    <ItemContainer selected={select} onClick={onClick}>
      <PokemonId>{id}</PokemonId> <PokemonName>{name}</PokemonName>
    </ItemContainer>
  );
};
